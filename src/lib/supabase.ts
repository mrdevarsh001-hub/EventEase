import { createClient } from '@supabase/supabase-js';
import { publicAnonKey, projectId } from '../../utils/supabase/info';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || `https://${projectId}.supabase.co`;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || publicAnonKey;

if (!supabaseAnonKey) {
  console.error('❌ VITE_SUPABASE_ANON_KEY is not set! Please add it to your .env file.');
  console.error('Get your anon key from: https://supabase.com/dashboard/project/jpuzlmsjeulyaqhchxgo/settings/api');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface UserProfile {
  id: string;
  email: string;
  role: 'organizer' | 'staff';
  full_name: string;
  phone: string;
  company?: string;
  created_at: string;
}