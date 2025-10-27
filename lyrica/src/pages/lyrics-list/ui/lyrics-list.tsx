import { useSongsStore } from "@/entities/songs";
import { useSongs } from "@/entities/songs";
import { SongListItem } from "@/features/song-list-item";
import { FlatList } from "react-native";

export const LyricsList: React.FC = () => {
  useSongs();

  const songs = useSongsStore((state) => state.songs);

  return (
    <FlatList
      data={songs}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <SongListItem
          index={index}
          id={item.id}
          title={item.title}
          priority={item.priority}
          effects={item.effects ?? []}
          verses={item.verses}
          keys={item.keys}
        />
      )}
    />
  );
};
