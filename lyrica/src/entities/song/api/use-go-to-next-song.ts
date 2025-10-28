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

export const useGoToNextSong = () => {
  const { navigate } = useNavigation<RootNavigationProp>();
  const route = useRoute<RouteProp<{ params: LyricDetailNavigationProp }>>();

  const nextSong = useSongsStore((state) => {
    const currentIndex = state.songs.findIndex(
      (song) => song.id === route.params.id
    );
    if (currentIndex === -1 || currentIndex === state.songs.length - 1) {
      return null;
    }
    return state.songs[currentIndex + 1];
  });

  const onPress = useCallback(() => {
    if (!nextSong) return;

    navigate(RouteNames.LyricDetail, {
      id: nextSong.id,
      title: nextSong.title,
    });
  }, [nextSong]);

  return { onNextPress: onPress, nextSong };
};
