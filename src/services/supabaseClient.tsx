import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bscmaaawecylzwdbhzgb.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzY21hYWF3ZWN5bHp3ZGJoemdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNzEwNDksImV4cCI6MjAzNjY0NzA0OX0.sciBxw5z0S6pimigr18v2jISqszXOwDXpmdIL2xZNIw'

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}
export const supabase = createClient(supabaseUrl, supabaseKey)
