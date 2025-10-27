import { View } from "react-native";
import { useTheme } from "react-native-paper";
import type { SongListItemLetProps } from "../model";
import { useSongsStore } from "@/entities/songs";
import { useCallback, useMemo } from "react";
import { NavigationIconButton } from "@/features/navigation-icon-button";
import { styles } from "./song-list-item-left.style";

export const SongListItemLeft: React.FC<SongListItemLetProps> = ({ id }) => {
  const theme = useTheme();
  const songHasBeenPerformed = useSongsStore((state) =>
    state.performedSongs.includes(id)
  );

  const togglePerformedSong = useSongsStore(
    (state) => state.togglePerformedSong
  );

  const onPress = useCallback(() => {
    togglePerformedSong(id);
  }, [togglePerformedSong, id]);

  const icon = useMemo(
    () => `check-circle${songHasBeenPerformed ? "" : "-outline"}`,
    [songHasBeenPerformed]
  );

  const color = useMemo(
    () =>
      songHasBeenPerformed
        ? theme.colors.primary
        : theme.colors.onSurfaceVariant,
    [songHasBeenPerformed]
  );

  return (
    <View style={[styles.itemLeft, { backgroundColor: "red" }]}>
      <NavigationIconButton
        icon={icon}
        iconColor={color}
        size={24}
        onPress={onPress}
      />
    </View>
  );
};
