import { useRoute, type RouteProp } from "@react-navigation/native";
import { useSongsStore } from "./store";
import { type LyricDetailNavigationProp } from "@/processes/routes/model";

export const useCurrentSong = () => {
  const route = useRoute<RouteProp<{ params: LyricDetailNavigationProp }>>();

  const currentSong = useSongsStore((state) =>
    state.songs.find((song) => song.id === route.params.id)
  );

  return { currentSong, route };
};
