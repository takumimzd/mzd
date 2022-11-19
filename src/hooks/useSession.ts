import { useEffect, useState } from "react";
import { supabase } from "src/libs/supabase";

export const useSession = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const onSession = () => {
    setIsSignedIn(!!supabase.auth.session());
  };

  useEffect(() => {
    onSession();
  }, []);
  return {
    isSignedIn: isSignedIn,
  };
};
