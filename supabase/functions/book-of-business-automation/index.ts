import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

type CampaignType = "intro" | "missed_call" | "birthday" | "nine_month" | "anniversary" | "lapse";

type CampaignRequest = {
  campaign: CampaignType;
  client_id?: string;
};

const VALID_CAMPAIGNS: CampaignType[] = ["intro", "missed_call", "birthday", "nine_month", "anniversary", "lapse"];

type BobClient = {
  id: string;
  user_id: string;
  full_name: string;
  status: string;
  email: string | null;
  phone: string | null;
  date_of_birth: string | null;
  written_date: string | null;
  draft_date: string | null;
};

const SMS_CAMPAIGNS = new Set<CampaignType>(["intro", "missed_call", "birthday", "nine_month", "anniversary", "lapse"]);
const EMAIL_CAMPAIGNS = new Set<CampaignType>(["birthday", "nine_month", "anniversary", "lapse"]);

const campaignSubject: Record<CampaignType, string> = {
  intro: "Welcome to Better Days Builder",
  missed_call: "Sorry we missed your call",
  birthday: "Happy birthday from Better Days Builder",
  nine_month: "9-month policy check-in",
  anniversary: "Policy anniversary check-in",
  lapse: "Your policy is at risk of lapse",
};

type RequestAuth = {
  mode: "user" | "cron";
  userId: string | null;
};

function jsonResponse(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  const encoder = new TextEncoder();
  const aBytes = encoder.encode(a);
  const bBytes = encoder.encode(b);

  let diff = 0;
  for (let i = 0; i < aBytes.length; i += 1) {
    diff |= aBytes[i] ^ bBytes[i];
  }

  return diff === 0;
}

async function fetchWithTimeout(url: string, init: RequestInit, timeoutMs = 10000): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeoutId);
  }
}

function campaignMessage(campaign: CampaignType, fullName: string): string {
  const firstName = (fullName || "there").trim().split(/\s+/)[0] || "there";

  switch (campaign) {
    case "intro":
      return `Hi ${firstName}, this is Better Days Builder. Thanks for connecting with us. Reply here any time and we will help you with your coverage options.`;
    case "missed_call":
      return `Hi ${firstName}, we missed your call. Reply here with the best time to reach you and we will call you back.`;
    case "birthday":
      return `Happy birthday ${firstName}! Wishing you a great year ahead. If you want to review your coverage this month, just reply to this message.`;
    case "nine_month":
      return `Hi ${firstName}, this is your 9-month policy check-in from Better Days Builder. Reply if you want to review your current plan.`;
    case "anniversary":
      return `Hi ${firstName}, happy policy anniversary. If anything changed this year, reply and we will help update your coverage.`;
    case "lapse":
      return `Hi ${firstName}, your policy may be at risk of lapse. Reply now so we can help you keep your coverage active.`;
  }
}

function normalizePhone(phone: string | null): string | null {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `+1${digits}`;
  }
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }
  if (phone.trim().startsWith("+")) {
    return phone.trim();
  }
  return null;
}

async function sendSmsIfConfigured(campaign: CampaignType, client: BobClient): Promise<{ status: string; providerMessageId: string | null; target: string | null }> {
  if (!SMS_CAMPAIGNS.has(campaign)) {
    return { status: "skipped", providerMessageId: null, target: null };
  }

  const target = normalizePhone(client.phone);
  if (!target) {
    return { status: "skipped", providerMessageId: null, target: null };
  }

  const sid = Deno.env.get("TWILIO_ACCOUNT_SID");
  const token = Deno.env.get("TWILIO_AUTH_TOKEN");
  const from = Deno.env.get("TWILIO_FROM_NUMBER");

  if (!sid || !token || !from) {
    return { status: "skipped", providerMessageId: null, target };
  }

  const auth = btoa(`${sid}:${token}`);
  const body = new URLSearchParams({
    To: target,
    From: from,
    Body: campaignMessage(campaign, client.full_name),
  });

  const response = await fetchWithTimeout(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(`Twilio error (${response.status})`, text);
    throw new Error("SMS delivery failed");
  }

  const payload = (await response.json()) as { sid?: string };
  return { status: "sent", providerMessageId: payload.sid ?? null, target };
}

async function sendEmailIfConfigured(campaign: CampaignType, client: BobClient): Promise<{ status: string; providerMessageId: string | null; target: string | null }> {
  if (!EMAIL_CAMPAIGNS.has(campaign)) {
    return { status: "skipped", providerMessageId: null, target: null };
  }

  const target = client.email?.trim() || null;
  if (!target) {
    return { status: "skipped", providerMessageId: null, target: null };
  }

  const endpoint = Deno.env.get("AUTOMATION_EMAIL_ENDPOINT");
  const authHeader = Deno.env.get("AUTOMATION_EMAIL_AUTH_HEADER");

  if (!endpoint || !authHeader) {
    return { status: "skipped", providerMessageId: null, target };
  }

  const response = await fetchWithTimeout(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader,
    },
    body: JSON.stringify({
      to: target,
      subject: campaignSubject[campaign],
      text: campaignMessage(campaign, client.full_name),
      campaign,
      client_id: client.id,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(`Email provider error (${response.status})`, text);
    throw new Error("Email delivery failed");
  }

  const payload = (await response.json().catch(() => ({}))) as { id?: string };
  return { status: "sent", providerMessageId: payload.id ?? null, target };
}

function toDateOnly(value: string): string {
  return value.slice(0, 10);
}

function eventKeyFor(campaign: CampaignType, client: BobClient, dateKey: string): string {
  return `${campaign}:${client.id}:${dateKey}`;
}

async function authorizeRequest(req: Request, supabaseUrl: string, supabaseAnonKey: string): Promise<RequestAuth> {
  const cronSecretExpected = Deno.env.get("AUTOMATION_CRON_SECRET");
  const cronSecretActual = req.headers.get("x-automation-secret");

  if (cronSecretExpected && cronSecretActual && timingSafeEqual(cronSecretExpected, cronSecretActual)) {
    return { mode: "cron", userId: null };
  }

  const authHeader = req.headers.get("authorization");
  if (!authHeader?.toLowerCase().startsWith("bearer ")) {
    throw new Error("Unauthorized");
  }

  const authClient = createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: authHeader,
      },
    },
  });

  const {
    data: { user },
    error,
  } = await authClient.auth.getUser();

  if (error || !user) {
    throw new Error("Unauthorized");
  }

  return { mode: "user", userId: user.id };
}

function shouldRunDateCampaign(campaign: CampaignType, client: BobClient, today: Date): boolean {
  const year = today.getUTCFullYear();
  const todayDate = new Date(Date.UTC(year, today.getUTCMonth(), today.getUTCDate()));

  if (campaign === "birthday") {
    if (!client.date_of_birth) return false;
    const dob = new Date(client.date_of_birth);
    return dob.getUTCMonth() === todayDate.getUTCMonth() && dob.getUTCDate() === todayDate.getUTCDate();
  }

  if (campaign === "nine_month") {
    if (!client.written_date) return false;
    const written = new Date(client.written_date);
    const target = new Date(Date.UTC(written.getUTCFullYear(), written.getUTCMonth() + 9, written.getUTCDate()));
    return toDateOnly(target.toISOString()) === toDateOnly(todayDate.toISOString());
  }

  if (campaign === "anniversary") {
    if (!client.written_date) return false;
    const written = new Date(client.written_date);
    return written.getUTCMonth() === todayDate.getUTCMonth() && written.getUTCDate() === todayDate.getUTCDate();
  }

  if (campaign === "lapse") {
    return client.status === "inactive";
  }

  return false;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY");

    if (!SUPABASE_URL || !SERVICE_ROLE_KEY || !SUPABASE_ANON_KEY) {
      throw new Error("Supabase service role environment is missing.");
    }

    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    const auth = await authorizeRequest(req, SUPABASE_URL, SUPABASE_ANON_KEY);

    const body = (await req.json()) as CampaignRequest;

    if (!VALID_CAMPAIGNS.includes(body.campaign)) {
      return jsonResponse(400, { error: "Invalid campaign type" });
    }

    const campaign = body.campaign;

    if (!campaign) {
      return jsonResponse(400, { error: "campaign is required" });
    }

    const singleClientCampaign = campaign === "intro" || campaign === "missed_call";

    if (singleClientCampaign && !body.client_id) {
      return jsonResponse(400, { error: "client_id is required for this campaign" });
    }

    if (singleClientCampaign && auth.mode !== "user") {
      return jsonResponse(403, { error: "Single-client campaigns require user authentication" });
    }

    let clientsQuery = supabase
      .from("book_of_business_clients")
      .select("id, user_id, full_name, status, email, phone, date_of_birth, written_date, draft_date");

    if (singleClientCampaign && body.client_id) {
      clientsQuery = clientsQuery.eq("id", body.client_id).eq("user_id", auth.userId);
    }

    if (!singleClientCampaign && auth.mode === "user") {
      clientsQuery = clientsQuery.eq("user_id", auth.userId);
    }

    const { data: clients, error: clientsError } = await clientsQuery;

    if (clientsError) {
      throw new Error(`Failed to load clients: ${clientsError.message}`);
    }

    const today = new Date();
    let processed = 0;
    let sent = 0;
    let skipped = 0;
    const errors: string[] = [];

    for (const rawClient of (clients ?? [])) {
      const client = rawClient as BobClient;
      processed += 1;

      if (!singleClientCampaign && !shouldRunDateCampaign(campaign, client, today)) {
        skipped += 1;
        continue;
      }

      const eventDateKey = toDateOnly(today.toISOString());
      const eventKeyRoot = eventKeyFor(campaign, client, eventDateKey);
      const smsEventKey = `${eventKeyRoot}:sms`;
      const emailEventKey = `${eventKeyRoot}:email`;
      const fallbackEventKey = `${eventKeyRoot}:none`;

      const { data: existingEvents, error: existingError } = await supabase
        .from("book_of_business_automation_events")
        .select("id")
        .in("event_key", [smsEventKey, emailEventKey, fallbackEventKey]);

      if (existingError) {
        console.error(`existing check failed for ${client.id}`, existingError.message);
        errors.push(`client ${client.id}: processing failed`);
        continue;
      }

      if ((existingEvents ?? []).length > 0) {
        skipped += 1;
        continue;
      }

      try {
        const smsResult = await sendSmsIfConfigured(campaign, client);
        const emailResult = await sendEmailIfConfigured(campaign, client);

        const rows: Array<Record<string, unknown>> = [];

        if (smsResult.target) {
          rows.push({
            client_id: client.id,
            event_type: campaign,
            event_key: smsEventKey,
            channel: "sms",
            target: smsResult.target,
            status: smsResult.status,
            provider_message_id: smsResult.providerMessageId,
            payload: {
              campaign,
              full_name: client.full_name,
            },
          });
        }

        if (emailResult.target) {
          rows.push({
            client_id: client.id,
            event_type: campaign,
            event_key: emailEventKey,
            channel: "email",
            target: emailResult.target,
            status: emailResult.status,
            provider_message_id: emailResult.providerMessageId,
            payload: {
              campaign,
              full_name: client.full_name,
            },
          });
        }

        if (rows.length === 0) {
          rows.push({
            client_id: client.id,
            event_type: campaign,
            event_key: fallbackEventKey,
            channel: "sms",
            target: client.phone ?? "unknown",
            status: "skipped",
            provider_message_id: null,
            payload: {
              reason: "No configured provider or destination",
            },
          });
        }

        const { error: insertError } = await supabase
          .from("book_of_business_automation_events")
          .upsert(rows, {
            onConflict: "event_key",
            ignoreDuplicates: true,
          });

        if (insertError) {
          throw new Error(`Failed writing automation event: ${insertError.message}`);
        }

        if (smsResult.status === "sent" || emailResult.status === "sent") {
          sent += 1;
        } else {
          skipped += 1;
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown automation error";
        console.error(`automation error for client ${client.id}`, message);
        errors.push(`client ${client.id}: delivery failed`);

        await supabase.from("book_of_business_automation_events").upsert({
          client_id: client.id,
          event_type: campaign,
          event_key: fallbackEventKey,
          channel: "sms",
          target: client.phone ?? "unknown",
          status: "failed",
          provider_message_id: null,
          payload: {
            error: message,
          },
        }, {
          onConflict: "event_key",
          ignoreDuplicates: true,
        });
      }
    }

    return jsonResponse(200, {
      success: true,
      campaign,
      processed,
      sent,
      skipped,
      errors,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    const status = message === "Unauthorized" ? 401 : 500;
    return jsonResponse(status, { error: message === "Unauthorized" ? "Unauthorized" : "Internal server error" });
  }
});
