import { useRef, useState, type PropsWithChildren } from "react";
import { ThemeContext } from "../api";
import type PagerView from "react-native-pager-view";

export const ViewPagerProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [page, setPage] = useState(0);
  const pagerRef = useRef<PagerView>(null);

  return (
    <ThemeContext value={{ page, setPage, pagerRef }}>{children}</ThemeContext>
  );
};
