import {
  useNavigation,
  useRoute,
  type RouteProp,
} from "@react-navigation/native";
import { useSongsStore } from "./store";
import {
  RouteNames,
  type LyricDetailNavigationProp,
  type RootNavigationProp,
} from "@/processes/routes/model";
import { useCallback } from "react";

export const useGoToPrevSong = () => {
  const { navigate } = useNavigation<RootNavigationProp>();
  const route = useRoute<RouteProp<{ params: LyricDetailNavigationProp }>>();

  const prevSong = useSongsStore((state) => {
    const currentIndex = state.songs.findIndex(
      (song) => song.id === route.params.id
    );
    if (currentIndex === -1 || currentIndex === 0) {
      return null;
    }
    return state.songs[currentIndex - 1];
  });

  const onPress = useCallback(() => {
    if (!prevSong) return;

    navigate(RouteNames.LyricDetail, {
      id: prevSong.id,
      title: prevSong.title,
    });
  }, [prevSong]);

  return { onPrevPress: onPress, prevSong };
};
