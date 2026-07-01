import { supabase } from "@/integrations/supabase/client";

export async function loginBookOfBusiness(
  email: string,
  password: string,
): Promise<{ ok: boolean; error?: string }> {
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { ok: false, error: error.message };
  }

  return { ok: true };
}

export async function logoutBookOfBusiness(): Promise<void> {
  await supabase.auth.signOut();
}

export async function isBookOfBusinessAuthenticated(): Promise<boolean> {
  const { data } = await supabase.auth.getSession();
  return Boolean(data.session);
}
