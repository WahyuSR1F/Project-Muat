import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://dalfuyytbnzgafolurzd.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbGZ1eXl0Ym56Z2Fmb2x1cnpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzMTAyNzAsImV4cCI6MjA3MDg4NjI3MH0.BRYeMISn3ZL9Q2yjS-aZSmQsJ9b2sp-wWYGvJSvTCa4";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
