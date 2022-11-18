import { ErrorType } from "@/types/api/common";
import { BlogType } from "@/types/supabase/table";
import { useEffect, useState } from "react";
import { getIndex } from "src/apis/common/getIndex";

export const useGetBlogs = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [error, setError] = useState<ErrorType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getBlogs = async () => {
    const { data, error, isLoading } = await getIndex<BlogType>({
      table: "blogs",
    });
    setIsLoading(isLoading);
    setBlogs(data);
    setError(error);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return { blogs, isLoading, error };
};
