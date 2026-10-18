-- UNDIGITAL schema.sql — copy-paste ke Supabase SQL Editor > New Query > Run
-- Tabel untuk FormHeader dinamis: events + form_headers + quick_actions

-- 1) EVENTS (sumber eventTitle / breadcrumb)
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  status text not null default 'inactive',
  status_label text not null default 'Belum Aktif',
  cover_image_url text,
  template text not null default 'classic',
  wa_number text not null default '',
  user_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2) FORM_HEADERS (sumber judul Formulir Pengaturan Undangan + subtitle)
create table if not exists public.form_headers (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  heading_title text not null default 'Formulir Pengaturan Undangan',
  heading_subtitle text not null default 'Lengkapi detail mempelai, jadwal prosesi, dan visual cover digital Anda.',
  badge_label text not null default 'Live Preview',
  show_badge boolean not null default true,
  show_open_link boolean not null default true,
  open_link_label text not null default 'Buka Tautan',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(event_id)
);
-- 3) QUICK_ACTIONS (sumber pills: Galery, Love Story, dst)
create table if not exists public.quick_actions (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references public.events(id) on delete cascade,
  action_id text not null,
  label text not null,
  icon text not null,
  sort_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
create index if not exists quick_actions_event_sort_idx
  on public.quick_actions (event_id, sort_order);

-- auto updated_at
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists trg_events_touch on public.events;
create trigger trg_events_touch before update on public.events
for each row execute function public.touch_updated_at();

drop trigger if exists trg_form_headers_touch on public.form_headers;
create trigger trg_form_headers_touch before update on public.form_headers
for each row execute function public.touch_updated_at();
-- 4) RLS (baca publik agar form bisa tampil tanpa login)
alter table public.events enable row level security;
alter table public.form_headers enable row level security;
alter table public.quick_actions enable row level security;

drop policy if exists "public read events" on public.events;
create policy "public read events" on public.events for select using (true);
drop policy if exists "public read form_headers" on public.form_headers;
create policy "public read form_headers" on public.form_headers for select using (true);
drop policy if exists "public read quick_actions" on public.quick_actions;
create policy "public read quick_actions" on public.quick_actions for select using (true);

drop policy if exists "auth write events" on public.events;
create policy "auth write events" on public.events for all
using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
drop policy if exists "auth write form_headers" on public.form_headers;
create policy "auth write form_headers" on public.form_headers for all
using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
drop policy if exists "auth write quick_actions" on public.quick_actions;
create policy "auth write quick_actions" on public.quick_actions for all
using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- 5) SEED contoh
insert into public.events (id, slug, title, status, status_label, template, wa_number)
values ('11111111-1111-1111-1111-111111111111','the-wedding-of-putra-putri','The Wedding of Putra & Putri','inactive','Belum Aktif','classic','81234567890')
on conflict (slug) do update set title = excluded.title;

insert into public.form_headers (event_id, heading_title, heading_subtitle, badge_label)
values ('11111111-1111-1111-1111-111111111111','Formulir Pengaturan Undangan','Lengkapi detail mempelai, jadwal prosesi, dan visual cover digital Anda.','Live Preview')
on conflict (event_id) do update set heading_title = excluded.heading_title;

insert into public.quick_actions (event_id, action_id, label, icon, sort_order, is_active)
select null, x.action_id, x.label, x.icon, x.sort_order, x.is_active
from (values
('galeri','Galery','photo_library',1,true),
('love-story','Love Story','favorite',2,true),
('rekening','Rekening Hadiah','featured_seasonal_and_gifts',3,true),
('link','Link Tambahan','link',4,true),
('susunan','Susunan Acara','event_note',5,true),
('custom-form','Custom Form','description',6,true),
('ucapan','Kelola Ucapan','forum',7,true),
('qr','QR Buku Tamu','qr_code_2',8,true)
) as x(action_id, label, icon, sort_order, is_active)
where not exists (
  select 1 from public.quick_actions q
  where q.event_id is null and q.action_id = x.action_id
);
