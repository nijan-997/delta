-- Run in Supabase SQL Editor (Dashboard → SQL → New query)

create table if not exists public.bootcamp_applications (
  email text primary key,
  full_name text not null,
  phone text not null,
  q1_time_spent text not null,
  q2_ai_usage text not null,
  q3_success_goal text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists bootcamp_applications_created_at_idx
  on public.bootcamp_applications (created_at desc);

-- Optional: keep updated_at fresh on upsert
create or replace function public.set_bootcamp_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists bootcamp_applications_updated_at on public.bootcamp_applications;

create trigger bootcamp_applications_updated_at
before update on public.bootcamp_applications
for each row
execute function public.set_bootcamp_updated_at();
