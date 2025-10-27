import { useCallback, useMemo } from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { NavigationIconButton } from "@/features/navigation-icon-button";
import { useViewPagerContext } from "../api/use-view-pager-context";
import type { PagerNavigationProps } from "../model";
import { Pill } from "@/components/pill";
import { styles } from "./pager-navigation.style";
import { Container } from "@/components/container";

export const PagerNavigation: React.FC<PagerNavigationProps> = ({ total }) => {
  const { page, pagerRef } = useViewPagerContext();

  const theme = useTheme();
  const style = useMemo(() => styles(theme), [theme]);

  const goToPrevChunk = useCallback(
    () => pagerRef.current?.setPage(page - 1),
    [page]
  );

  const goToNextChunk = useCallback(
    () => pagerRef.current?.setPage(page + 1),
    [page]
  );

  const canShowLeftIcon = useMemo(() => page > 0, [page]);
  const canShowRightIcon = useMemo(() => page < total - 1, [page]);

  if (!total) return null;

  return (
    <View style={style.pagerNavigation}>
      <View style={style.left}>
        {canShowLeftIcon && (
          <NavigationIconButton icon="chevron-left" onPress={goToPrevChunk} />
        )}
      </View>
      <Pill>
        <Text style={style.text}>
          {page + 1} / {total}
        </Text>
      </Pill>
      <View style={style.right}>
        {canShowRightIcon && (
          <NavigationIconButton icon="chevron-right" onPress={goToNextChunk} />
        )}
      </View>
    </View>
  );
};
