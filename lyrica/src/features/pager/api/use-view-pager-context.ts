import { useContext } from "react";
import { ThemeContext } from "./context";

export const useViewPagerContext = () => {
  const viewPagerContext = useContext(ThemeContext);

  if (!viewPagerContext) {
    throw new Error(
      "useViewPagerContext must be used within a ViewPagerProvider"
    );
  }

  return viewPagerContext;
};
