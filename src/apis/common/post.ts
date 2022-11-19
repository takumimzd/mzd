import { supabase } from "@/libs/supabase";
import camelcaseKeys from "camelcase-keys";

import { TableType } from "@/types/supabase/table";
import { ErrorType } from "@/types/api/common";

interface Props<U> {
  table: TableType;
  params: U;
}

export const post = async <T, U>({ table, params }: Props<U>) => {
  const { data, error: supabaseError } = await supabase
    .from<T>(table)
    .insert(params)
    .single();
  const camelcaseData = !!data ? camelcaseKeys(data) : null;

  const error: ErrorType | null = supabaseError
    ? {
        code: supabaseError?.code,
        message: supabaseError?.message,
      }
    : null;

  return { data: camelcaseData, error };
};
