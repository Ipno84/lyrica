import { type RootNavigationProp } from "@/processes/routes/model";
import { useCurrentSong } from "@/entities/song";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Text } from "react-native-paper";
import { VersesPager } from "@/widgets/verses-pager";
import { SongControl } from "@/features/song";
import { Container } from "@/shared/components/container";
import { ViewPagerProvider } from "@/features/pager";
import { StyleSheet } from "react-native";

export const LyricDetail: React.FC = () => {
  const { setOptions } = useNavigation<RootNavigationProp>();

  const { currentSong } = useCurrentSong();

  useLayoutEffect(() => {
    setOptions({
      title: currentSong?.title ?? "",
      headerRight: () => <SongControl id={currentSong?.id ?? ""} />,
    });
  }, [setOptions, currentSong?.title]);

  if (!currentSong || !currentSong.verses) {
    return (
      <Container>
        <Text style={styles.emptyText}>No verses available.</Text>
      </Container>
    );
  }

  return (
    <Container>
      <ViewPagerProvider>
        <VersesPager song={currentSong} />
      </ViewPagerProvider>
    </Container>
  );
};

const styles = StyleSheet.create({
  emptyText: {
    fontSize: 32,
    textAlign: "center",
  },
});
