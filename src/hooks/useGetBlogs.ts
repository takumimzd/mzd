import { supabase } from "@/libs/supabase";
import { useEffect } from "react";

export const useGetBlogs = () => {
  const getBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);
};
