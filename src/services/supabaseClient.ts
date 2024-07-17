import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bscmaaawecylzwdbhzgb.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}
export const supabase = createClient(supabaseUrl, supabaseKey)
