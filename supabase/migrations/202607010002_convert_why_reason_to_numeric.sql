-- Convert why_reason (Coverage) field from text to numeric
-- This allows storing actual dollar amounts for coverage amounts instead of text descriptions

alter table book_of_business_clients
  drop constraint if exists check_why_reason;

alter table book_of_business_clients
  alter column why_reason type numeric(12, 2) using null;

alter table book_of_business_clients
  alter column why_reason set default 0;
