-- Convert cs_needed from text (yes/no) to numeric (dollar amount)
alter table public.book_of_business_clients
  drop constraint if exists chk_book_of_business_clients_cs_needed;

alter table public.book_of_business_clients
  alter column cs_needed drop default,
  alter column cs_needed drop not null,
  alter column cs_needed type numeric(12, 2) using NULL;

alter table public.book_of_business_clients
  alter column cs_needed set default 0;

alter table public.book_of_business_clients
  alter column cs_needed set not null;
