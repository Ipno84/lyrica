import { View } from "react-native";
import { useTheme } from "react-native-paper";
import type { PerformedTogglerProps } from "../model";
import { useSongsStore } from "@/entities/song";
import { useCallback, useMemo } from "react";
import { NavigationIconButton } from "@/shared/components/icon-button";
import { styles } from "./styles";

export const PerformedToggler: React.FC<PerformedTogglerProps> = ({ id }) => {
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
    <View style={styles.itemLeft}>
      <NavigationIconButton
        icon={icon}
        iconColor={color}
        size={24}
        onPress={onPress}
      />
    </View>
  );
};
