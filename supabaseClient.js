import { createClient } from '@supabase/supabase-js'

// Configuración con tus llaves implementadas
const supabaseUrl = 'https://lieysjlpiwsqjsdmcaay.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpZXlzamxwaXdzcWpzZG1jYWF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4MDYzNDAsImV4cCI6MjA5ODM4MjM0MH0.fCWLx6mi9qkhT-AgG_CeQPBIlFV65Bv8gix9zWnEteE'

export const supabase = createClient(supabaseUrl, supabaseKey)
