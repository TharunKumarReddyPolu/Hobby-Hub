import { createClient } from '@supabase/supabase-js'

const URL = 'https://nqzllglwirssovexuydj.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xemxsZ2x3aXJzc292ZXh1eWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMzEzNjgsImV4cCI6MjAyNzkwNzM2OH0.uwlmYtLvEoRhwXazxK1uzlE9FRZ_FksqWIwyU0VDcMI';


export const supabase = createClient(URL, API_KEY);