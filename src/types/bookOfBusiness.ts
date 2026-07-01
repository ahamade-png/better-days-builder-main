export interface BookOfBusinessClient {
  id: string;
  user_id: string;
  full_name: string;
  status: string;
  cs_needed: string;
  email: string | null;
  phone: string | null;
  state: string | null;
  lead_type: string | null;
  lead_quality: string | null;
  referral_affiliate: string | null;
  why_reason: string | null;
  notes: string | null;
  date_of_birth: string | null;
  home_street: string | null;
  home_city: string | null;
  home_zip: string | null;
  created_at: string;
  updated_at: string;
}

export interface BookOfBusinessClientInput {
  full_name: string;
  status: string;
  cs_needed: string;
  email: string;
  phone: string;
  state: string;
  lead_type: string;
  lead_quality: string;
  referral_affiliate: string;
  why_reason: string;
  notes: string;
  date_of_birth: string;
  home_street: string;
  home_city: string;
  home_zip: string;
}

export const defaultBookOfBusinessClientInput: BookOfBusinessClientInput = {
  full_name: "",
  status: "active",
  cs_needed: "no",
  email: "",
  phone: "",
  state: "",
  lead_type: "",
  lead_quality: "",
  referral_affiliate: "",
  why_reason: "",
  notes: "",
  date_of_birth: "",
  home_street: "",
  home_city: "",
  home_zip: "",
};
