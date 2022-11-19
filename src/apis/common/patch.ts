import { supabase } from "@/libs/supabase";
import camelcaseKeys from "camelcase-keys";

import { TableType } from "@/types/supabase/table";
import { ErrorType } from "@/types/api/common";

interface Props<T> {
  table: TableType;
  params: Partial<T>;
  column: keyof T;
  value: T[keyof T];
}

export const patch = async <T>({ table, params, column, value }: Props<T>) => {
  const { data, error: supabaseError } = await supabase
    .from<T>(table)
    .update(params)
    .eq(column, value)
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
