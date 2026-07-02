alter table public.book_of_business_clients
  add column if not exists written_date date,
  add column if not exists draft_date date;