import { useQuery } from "@tanstack/react-query";
import { GET_SONGS_QUERY_KEY, type Song } from "../model";
import { Firestore } from "@/processes/firebase";
import { useEffect } from "react";
import { useSongsStore } from "./store";

export const useSongs = () => {
  const setSongs = useSongsStore((state) => state.setSongs);
  const setIsLoadingSongs = useSongsStore((state) => state.setIsLoadingSongs);

  const query = useQuery({
    queryKey: [GET_SONGS_QUERY_KEY],
    queryFn: () => Firestore.getSongs(),
    select: (data) => data.sort((a: Song, b: Song) => a.priority - b.priority),
  });

  useEffect(() => {
    if (query.data) setSongs(query.data);
  }, [query.data, setSongs]);

  useEffect(() => {
    setIsLoadingSongs(query.isLoading);
  }, [setIsLoadingSongs, query.isLoading]);

  return query;
};
