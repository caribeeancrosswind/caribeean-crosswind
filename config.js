// IMPORTANTE:
// Reemplaza estos valores con los tuyos reales de Supabase
// Ve a Supabase → Settings → API

const SUPABASE_URL = "https://tvzgbzmgoklweddcxqbb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_4KUtTNvezxKzgILwkHwYew_LJrKh93n";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
