import type { Song } from "@/entities/song";
import type { Style } from "react-native-paper/lib/typescript/components/List/utils";

export type PerformedTogglerProps = {
  color?: string;
  style?: Style;
  id: Song["id"];
};
