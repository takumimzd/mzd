import camelcaseKeys from "camelcase-keys";
import { supabase } from "@/libs/supabase";

import { TableType } from "@/types/supabase/table";
import { ErrorType } from "@/types/api/common";

interface Props {
  table: TableType;
}

export const getIndex = async <T>({ table }: Props) => {
  const { data, error: supabaseError } = await supabase
    .from<T>(table)
    .select("*");

  const camelcaseData = camelcaseKeys(!!data ? data : []);

  const error: ErrorType | null = supabaseError
    ? {
        code: supabaseError?.code,
        message: supabaseError?.message,
      }
    : null;

  return {
    data: camelcaseData,
    error,
  };
};
