-- Supabase SQL: Patients table for Dental Clinic CRUD
create extension if not exists "uuid-ossp";
create table if not exists public.patients (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text,
  phone text,
  address text,
  created_at timestamptz default now()
);
