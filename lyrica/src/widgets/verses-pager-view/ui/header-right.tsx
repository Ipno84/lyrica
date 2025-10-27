import { useGoToPrevSong } from "@/entities/songs";
import { SongListItemLeft } from "@/features/song-list-item/ui/song-list-item-left";
import { View } from "react-native";
import { useGoToNextSong } from "@/entities/songs";
import { NavigationIconButton } from "@/features/navigation-icon-button";
import type { HeaderRightProps } from "../model";
import { styles } from "./header-right.style";

export const HeaderRight: React.FC<HeaderRightProps> = ({ id }) => {
  const { onNextPress, nextSong } = useGoToNextSong();
  const { onPrevPress, prevSong } = useGoToPrevSong();

  return (
    <View style={styles.headerRight}>
      {prevSong && (
        <NavigationIconButton icon="skip-previous" onPress={onPrevPress} />
      )}
      <SongListItemLeft id={id} />
      {nextSong && (
        <NavigationIconButton icon="skip-next" onPress={onNextPress} />
      )}
    </View>
  );
};
