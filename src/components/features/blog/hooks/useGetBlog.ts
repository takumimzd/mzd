import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ErrorType } from "@/types/api/common";
import { BlogType } from "@/types/supabase/table";
import { getById } from "@/apis/common/getById";

export const useGetBlog = () => {
  const router = useRouter();
  const { id } = router.query;

  const [blog, setBlog] = useState<BlogType | null>(null);
  const [error, setError] = useState<ErrorType | null>(null);

  const getBlog = async (id: number) => {
    if (!id) return;
    const { data, error } = await getById<BlogType>({
      table: "blogs",
      column: "id",
      value: id,
    });
    setBlog(data);
    setError(error);
  };

  useEffect(() => {
    getBlog(Number(id));
  }, [id]);

  return { blog, isLoading: !blog && !error, error };
};
