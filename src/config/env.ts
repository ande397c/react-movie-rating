const supabaseUrl = 'https://bscmaaawecylzwdbhzgb.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const env = {
  SUPABASE_URL: supabaseUrl,
  SUPABASE_KEY: supabaseKey
}
