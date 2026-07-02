import { supabase } from "@/integrations/supabase/client";
import { BookOfBusinessClient, BookOfBusinessClientInput } from "@/types/bookOfBusiness";

const TABLE_NAME = "book_of_business_clients";

export async function listBookOfBusinessClients(): Promise<BookOfBusinessClient[]> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load Book of Business clients", error);
    throw new Error("Unable to load clients right now.");
  }

  return (data ?? []) as BookOfBusinessClient[];
}

export async function createBookOfBusinessClient(
  payload: BookOfBusinessClientInput,
): Promise<BookOfBusinessClient> {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("Failed to resolve authenticated user for Book of Business insert", userError);
    throw new Error("Authentication required. Please log in again.");
  }

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert({
      ...payload,
      user_id: user.id,
      email: payload.email || null,
      phone: payload.phone || null,
      state: payload.state || null,
      lead_type: payload.lead_type || null,
      lead_quality: payload.lead_quality || null,
      referral_affiliate: payload.referral_affiliate || null,
      why_reason: payload.why_reason ?? null,
      notes: payload.notes || null,
      date_of_birth: payload.date_of_birth || null,
      written_date: payload.written_date || null,
      draft_date: payload.draft_date || null,
      home_street: payload.home_street || null,
      home_city: payload.home_city || null,
      home_zip: payload.home_zip || null,
    })
    .select("*")
    .single();

  if (error) {
    console.error("Failed to save Book of Business client", error);
    throw new Error("Unable to save this client right now.");
  }

  void supabase.functions
    .invoke("book-of-business-automation", {
      body: {
        campaign: "intro",
        client_id: data.id,
      },
    })
    .catch((automationError) => {
      console.error("Failed to queue intro automation", automationError);
    });

  return data as BookOfBusinessClient;
}

export async function updateBookOfBusinessClient(
  clientId: string,
  payload: BookOfBusinessClientInput,
): Promise<BookOfBusinessClient> {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("Failed to resolve authenticated user for Book of Business update", userError);
    throw new Error("Authentication required. Please log in again.");
  }

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update({
      ...payload,
      user_id: user.id,
      email: payload.email || null,
      phone: payload.phone || null,
      state: payload.state || null,
      lead_type: payload.lead_type || null,
      lead_quality: payload.lead_quality || null,
      referral_affiliate: payload.referral_affiliate || null,
      why_reason: payload.why_reason ?? null,
      notes: payload.notes || null,
      date_of_birth: payload.date_of_birth || null,
      written_date: payload.written_date || null,
      draft_date: payload.draft_date || null,
      home_street: payload.home_street || null,
      home_city: payload.home_city || null,
      home_zip: payload.home_zip || null,
    })
    .eq("id", clientId)
    .select("*")
    .single();

  if (error) {
    console.error("Failed to update Book of Business client", error);
    throw new Error("Unable to update this client right now.");
  }

  return data as BookOfBusinessClient;
}

export async function deleteBookOfBusinessClient(clientId: string): Promise<void> {
  const { error } = await supabase.from(TABLE_NAME).delete().eq("id", clientId);

  if (error) {
    console.error("Failed to delete Book of Business client", error);
    throw new Error("Unable to delete this client right now.");
  }
}
