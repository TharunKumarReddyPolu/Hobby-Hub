import { createClient } from '@supabase/supabase-js'

const URL = 'https://nlltltxyiasluoadxjcn.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sbHRsdHh5aWFzbHVvYWR4amNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwNjA1NzMsImV4cCI6MjAyODYzNjU3M30.Y1tbizcxxfo4q6RYo3WVNvTugADcFI4RKFyOwlFDq0c';

export const supabase = createClient(URL, API_KEY);