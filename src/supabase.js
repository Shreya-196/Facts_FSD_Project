import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zrwzaleuggkmigboztft.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpyd3phbGV1Z2drbWlnYm96dGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MDIxNjAsImV4cCI6MjA1OTI3ODE2MH0.ld_BnQM1JKiubjJK_RM3orkiWRHO4nst2sGNC7_EiJQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
