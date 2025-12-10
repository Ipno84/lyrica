import { useCallback, type PropsWithChildren } from "react";
import PagerView, {
  type PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";
import { useViewPagerContext } from "../api/use-view-pager-context";
import { styles } from "./styles";

export const Pager: React.FC<PropsWithChildren> = ({ children }) => {
  const { setPage, pagerRef } = useViewPagerContext();

  const onPageSelected = useCallback(
    (e: PagerViewOnPageSelectedEvent) => setPage(e.nativeEvent.position),
    [setPage]
  );

  return (
    <PagerView
      ref={pagerRef}
      style={styles.container}
      initialPage={0}
      pageMargin={64}
      onPageSelected={onPageSelected}
    >
      {children}
    </PagerView>
  );
};
