import type { Song } from "@/entities/songs";
import type { Style } from "react-native-paper/lib/typescript/components/List/utils";

export type SongListItemProps = Song & { index: number };

export type SongListItemLetProps = {
  color?: string;
  style?: Style;
  id: Song["id"];
};
