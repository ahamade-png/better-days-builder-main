create table if not exists public.book_of_business_clients (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  full_name text not null,
  status text not null default 'active',
  cs_needed text not null default 'no',
  email text,
  phone text,
  state text,
  lead_type text,
  lead_quality text,
  referral_affiliate text,
  why_reason text,
  notes text,
  date_of_birth date,
  home_street text,
  home_city text,
  home_zip text,
  mailing_street text,
  mailing_city text,
  mailing_state text,
  mailing_zip text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.book_of_business_clients
  drop constraint if exists chk_book_of_business_clients_status;
alter table public.book_of_business_clients
  add constraint chk_book_of_business_clients_status
  check (status in ('active', 'pending', 'inactive'));

alter table public.book_of_business_clients
  drop constraint if exists chk_book_of_business_clients_cs_needed;
alter table public.book_of_business_clients
  add constraint chk_book_of_business_clients_cs_needed
  check (cs_needed in ('yes', 'no'));

create index if not exists idx_bob_clients_user_id on public.book_of_business_clients(user_id);
create index if not exists idx_bob_clients_created_at on public.book_of_business_clients(created_at desc);

create or replace function public.set_book_of_business_clients_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_book_of_business_clients_updated_at on public.book_of_business_clients;
create trigger trg_book_of_business_clients_updated_at
before update on public.book_of_business_clients
for each row
execute function public.set_book_of_business_clients_updated_at();

alter table public.book_of_business_clients enable row level security;

drop policy if exists "Users can read own book of business clients" on public.book_of_business_clients;
create policy "Users can read own book of business clients"
on public.book_of_business_clients
for select
using (auth.uid() = user_id);

drop policy if exists "Users can insert own book of business clients" on public.book_of_business_clients;
create policy "Users can insert own book of business clients"
on public.book_of_business_clients
for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can update own book of business clients" on public.book_of_business_clients;
create policy "Users can update own book of business clients"
on public.book_of_business_clients
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can delete own book of business clients" on public.book_of_business_clients;
create policy "Users can delete own book of business clients"
on public.book_of_business_clients
for delete
using (auth.uid() = user_id);
