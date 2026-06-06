const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/mwOG1U69TgQiZLdqLjnV/webhook-trigger/83ef0425-b871-4384-92a5-11e4d99ecab3";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { full_name, email, phone, need, page, source, submitted_at } = body;

    // Validate required fields
    if (!full_name || typeof full_name !== "string" || full_name.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Name is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const results: Record<string, string> = {};

    // 1. Send to GHL webhook
    try {
      const ghlRes = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name, email, phone, need, page, source, submitted_at }),
      });
      results.ghl = ghlRes.ok ? "ok" : `failed:${ghlRes.status}`;
      await ghlRes.text(); // consume body
    } catch (e) {
      results.ghl = `error:${e instanceof Error ? e.message : "unknown"}`;
    }

    // 2. Send to Follow Up Boss
    const FUB_API_KEY = Deno.env.get("FUB_API_KEY");
    if (FUB_API_KEY) {
      try {
        const nameParts = (full_name || "").trim().split(/\s+/);
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";

        const fubPayload: Record<string, unknown> = {
          source: "National Benefit Service Center Website",
          system: "nbsc-website",
          type: "General Inquiry",
          message: need || "Information request from website",
          person: {
            firstName,
            lastName,
            ...(email ? { emails: [{ value: email }] } : {}),
            ...(phone ? { phones: [{ value: phone }] } : {}),
          },
        };

        const fubRes = await fetch("https://api.followupboss.com/v1/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa(FUB_API_KEY + ":")}`,
          },
          body: JSON.stringify(fubPayload),
        });

        results.fub = fubRes.ok ? "ok" : `failed:${fubRes.status}`;
        await fubRes.text(); // consume body
      } catch (e) {
        results.fub = `error:${e instanceof Error ? e.message : "unknown"}`;
      }
    } else {
      results.fub = "skipped:no_api_key";
    }

    return new Response(
      JSON.stringify({ success: true, results }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("submit-lead error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
