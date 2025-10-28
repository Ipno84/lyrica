import { useEffect } from "react";
import { useChunkArray } from "@/shared/libs/chunk-array";
import { useViewPagerContext } from "@/features/pager";
import type { VersersPagerProps } from "../model";
import { Verses } from "@/features/song/ui/verses";
import { Pager, PagerNavigation } from "@/features/pager";

export const VersesPager: React.FC<VersersPagerProps> = ({ song }) => {
  const { pagerRef } = useViewPagerContext();

  useEffect(() => {
    pagerRef.current?.setPage(0);
  }, [song]);

  const chunkedVerses = useChunkArray(song?.verses || [], 12);

  return (
    <>
      <Pager>
        {chunkedVerses.map((verses, i) => (
          <Verses key={i} verses={verses} />
        ))}
      </Pager>
      <PagerNavigation total={chunkedVerses.length} />
    </>
  );
};
