import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
config()

const {
  SUPABASE_URL,
  SUPABASE_SECRET_KEY
} = process.env

export default createClient(SUPABASE_URL, SUPABASE_SECRET_KEY)
