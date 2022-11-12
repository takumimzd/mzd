import { useEffect, useState } from "react";
import { minPcWindowWidth } from "@/constants/windowSize";

export const useIsPcWindow = () => {
  const [isPc, setIsPc] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const onResize = () => {
      setIsPc(window.innerWidth >= minPcWindowWidth);
    };
    setIsPc(window.innerWidth >= minPcWindowWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { isPc };
};
