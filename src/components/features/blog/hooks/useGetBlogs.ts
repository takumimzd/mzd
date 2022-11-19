import { useEffect, useState } from "react";

import { getIndex } from "@/apis/common/getIndex";

import { ErrorType } from "@/types/api/common";
import { BlogType } from "@/types/supabase/table";

export const useGetBlogs = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [error, setError] = useState<ErrorType | null>(null);

  const getBlogs = async () => {
    const { data, error } = await getIndex<BlogType>({
      table: "blogs",
    });
    setBlogs(data);
    setError(error);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return { blogs, isLoading: !blogs.length && !error, error };
};
