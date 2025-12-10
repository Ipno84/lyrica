import { useGoToPrevSong } from "@/entities/song";
import { View } from "react-native";
import { useGoToNextSong } from "@/entities/song";
import { NavigationIconButton } from "@/shared/components/icon-button";
import type { SongControlProps } from "../model";
import { PerformedToggler } from "@/shared/components/performed-toggler";
import { styles } from "./styles";

export const SongControl: React.FC<SongControlProps> = ({ id }) => {
  const { onNextPress, nextSong } = useGoToNextSong();
  const { onPrevPress, prevSong } = useGoToPrevSong();

  return (
    <View style={styles.headerRight}>
      {prevSong && (
        <NavigationIconButton icon="skip-previous" onPress={onPrevPress} />
      )}
      <PerformedToggler id={id} />
      {nextSong && (
        <NavigationIconButton icon="skip-next" onPress={onNextPress} />
      )}
    </View>
  );
};
