import { createClient, User, Session, ApiError } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type SupabaseUserType = User | null;
export type SupabaseSessionType = Session | null;
export type SupabaseApiErrorType = ApiError | null;
