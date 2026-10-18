import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(url && anonKey)

if (!isSupabaseConfigured) {
  console.warn('[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY belum diisi. Pakai data lokal. Cek file .env')
}

// Jangan panggil createClient dengan string kosong — itu throw
// "supabaseUrl is required" dan bikin seluruh React blank.
export const supabase = isSupabaseConfigured ? createClient(url, anonKey) : null
