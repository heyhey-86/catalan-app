import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://djkdbvcymouywxhwmlrf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqa2RidmN5bW91eXd4aHdtbHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxMTYyNjIsImV4cCI6MjA4NTY5MjI2Mn0.zBWJ0vRnUHMju2PCRPvz5nZB7h77R_n1dskOQL3iW0I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)