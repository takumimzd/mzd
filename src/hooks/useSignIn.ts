import { useState } from "react";
import { supabase } from "src/libs/supabase";

interface Props {
  email: string;
}
export const useSignIn = ({ email }: Props) => {
  const [isError, setIsError] = useState(false);

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signIn({
      email,
    });
    setIsError(!!error);
  };
  return {
    handleSignIn,
    isError,
  };
};
