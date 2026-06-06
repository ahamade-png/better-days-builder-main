const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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

    // Send to Follow Up Boss only.
    const results: Record<string, string> = {};
    const FUB_API_KEY = Deno.env.get("FUB_API_KEY");
    if (!FUB_API_KEY) {
      throw new Error("FUB_API_KEY is not configured.");
    }

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
      ...(page ? { page } : {}),
      ...(source ? { source } : {}),
      ...(submitted_at ? { submittedAt: submitted_at } : {}),
    };

    const fubRes = await fetch("https://api.followupboss.com/v1/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(FUB_API_KEY + ":")}`,
      },
      body: JSON.stringify(fubPayload),
    });

    if (!fubRes.ok) {
      const errText = await fubRes.text();
      throw new Error(`FUB request failed (${fubRes.status}): ${errText || "Unknown error"}`);
    }

    results.fub = "ok";
    await fubRes.text();

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
