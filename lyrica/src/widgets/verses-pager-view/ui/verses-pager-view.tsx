import { type RootNavigationProp } from "@/entities/routes/model";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useLayoutEffect, useMemo } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import PagerView, {
  type PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";
import { chunkArray } from "@/libs/chunk-array";
import { useViewPagerContext } from "../api/use-view-pager-context";
import type { VersersPagerViewProps } from "../model";
import { HeaderRight } from "./header-right";
import { PagerNavigation } from "./pager-navigation";
import { styles } from "./verses-pager-view.style";

export const VersesPagerView: React.FC<VersersPagerViewProps> = ({ song }) => {
  const { setPage, pagerRef } = useViewPagerContext();

  const { setOptions } = useNavigation<RootNavigationProp>();

  useEffect(() => {
    pagerRef.current?.setPage(0);
  }, [song]);

  useLayoutEffect(() => {
    setOptions({
      title: song?.title ?? "",
      headerRight: () => <HeaderRight id={song?.id ?? ""} />,
    });
  }, [setOptions, song?.title]);

  const chunkedVerses = useMemo(
    () => chunkArray(song?.verses || [], 12),
    [song?.verses]
  );

  const onPageSelected = useCallback(
    (e: PagerViewOnPageSelectedEvent) => setPage(e.nativeEvent.position),
    [setPage]
  );

  return (
    <>
      <PagerView
        ref={pagerRef}
        style={styles.container}
        initialPage={0}
        pageMargin={64}
        onPageSelected={onPageSelected}
      >
        {chunkedVerses.map((chunk, i) => {
          return (
            <View key={i} style={styles.wrapper}>
              {chunk.map((verse, index) => (
                <Text key={index} style={styles.text}>
                  {verse}
                </Text>
              ))}
            </View>
          );
        })}
      </PagerView>
      <PagerNavigation total={chunkedVerses.length} />
    </>
  );
};
