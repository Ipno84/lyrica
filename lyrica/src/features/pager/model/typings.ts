import type { Song } from "@/entities/song";
import type PagerView from "react-native-pager-view";

export type ViewPagerContextType = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pagerRef: React.RefObject<PagerView | null>;
};

export type PagerNavigationProps = {
  total: number;
};
