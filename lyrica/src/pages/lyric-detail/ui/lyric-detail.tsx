import { type RootNavigationProp } from "@/entities/routes/model";
import { useCurrentSong } from "@/entities/songs";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Text } from "react-native-paper";
import {
  HeaderRight,
  VersesPagerView,
  ViewPagerProvider,
} from "@/widgets/verses-pager-view";
import { Container } from "@/components/container";
import { styles } from "./empty-text.style";

export const LyricDetail: React.FC = () => {
  const { setOptions } = useNavigation<RootNavigationProp>();

  const currentSong = useCurrentSong();

  useLayoutEffect(() => {
    setOptions({
      title: currentSong?.title ?? "",
      headerRight: () => <HeaderRight id={currentSong?.id ?? ""} />,
    });
  }, [setOptions, currentSong?.title]);

  if (!currentSong || !currentSong.verses)
    return (
      <Container>
        <Text style={styles.emptyText}>No verses available.</Text>
      </Container>
    );

  return (
    <Container>
      <ViewPagerProvider>
        <VersesPagerView song={currentSong} />
      </ViewPagerProvider>
    </Container>
  );
};
