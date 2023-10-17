import { useActivePageContext } from "@/context/ActivePageProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { navLinks } from "./data";

type SectionType = (typeof navLinks)[number]["name"];

export const useScrollHook = (page: SectionType, threshold = 0.75) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActivePage, timeDeplay } = useActivePageContext();

  useEffect(() => {
    if (inView && Date.now() - timeDeplay > 1000) {
      setActivePage(page);
    }
  }, [inView, setActivePage, timeDeplay,page]);

  return { ref };
};
