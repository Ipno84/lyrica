import type { Song } from "@/entities/song";

export type SongControlProps = {
  id: Song["id"];
};

export type VersesProps = {
  verses: string[];
};

export type SongListItemProps = Song;
