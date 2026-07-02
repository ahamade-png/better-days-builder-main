create table if not exists public.book_of_business_automation_events (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.book_of_business_clients(id) on delete cascade,
  event_type text not null,
  event_key text not null unique,
  channel text not null check (channel in ('sms', 'email')),
  target text not null,
  status text not null default 'sent' check (status in ('sent', 'failed', 'skipped')),
  provider_message_id text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_bob_automation_events_client_id
  on public.book_of_business_automation_events(client_id);

create index if not exists idx_bob_automation_events_event_type
  on public.book_of_business_automation_events(event_type);

alter table public.book_of_business_automation_events enable row level security;

drop policy if exists "Users can read own book of business automation events" on public.book_of_business_automation_events;
create policy "Users can read own book of business automation events"
on public.book_of_business_automation_events
for select
using (
  client_id in (
    select id
    from public.book_of_business_clients
    where user_id = auth.uid()
  )
);

drop policy if exists "Block direct client inserts" on public.book_of_business_automation_events;
create policy "Block direct client inserts"
on public.book_of_business_automation_events
for insert
with check (false);

drop policy if exists "Block direct client updates" on public.book_of_business_automation_events;
create policy "Block direct client updates"
on public.book_of_business_automation_events
for update
using (false)
with check (false);

drop policy if exists "Block direct client deletes" on public.book_of_business_automation_events;
create policy "Block direct client deletes"
on public.book_of_business_automation_events
for delete
using (false);