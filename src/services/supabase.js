import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zjgnddjgyzlpuaqfvskb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqZ25kZGpneXpscHVhcWZ2c2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MDE0MDksImV4cCI6MjAwNjM3NzQwOX0.E4A5xCFr9HBIuQjOEfPT8nHj1JO5tXYVazIjLfZpGHY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
