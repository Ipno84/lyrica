import { useSongsStore } from "@/entities/song";
import { useSongs } from "@/entities/song";
import { SongListItem } from "@/features/song";
import { FlatList } from "react-native";

export const LyricsList: React.FC = () => {
  useSongs();

  const songs = useSongsStore((state) => state.songs);

  return (
    <FlatList
      data={songs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <SongListItem
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
