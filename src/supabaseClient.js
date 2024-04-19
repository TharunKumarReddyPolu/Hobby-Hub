import { createClient } from '@supabase/supabase-js'

const URL = 'https://qilcxglklepxfikqxqdg.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpbGN4Z2xrbGVweGZpa3F4cWRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0ODIxODgsImV4cCI6MjAyOTA1ODE4OH0.-A6_N7DAxpInGmLBz-Ms56VEK_ljXq-1-AkdMxWGyu8';

export const supabase = createClient(URL, API_KEY);