import type { Song } from "@/entities/songs";
import type PagerView from "react-native-pager-view";

export type ViewPagerContextType = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pagerRef: React.RefObject<PagerView | null>;
};

export type VersersPagerViewProps = {
  song: Song;
};

export type HeaderRightProps = {
  id: Song["id"];
};

export type PagerNavigationProps = {
  total: number;
};
