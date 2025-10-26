import { useStore } from "zustand";
import { createStore } from "zustand/vanilla";
import { type SongsStore } from "../model";
import { devtools, persist } from "zustand/middleware";

export const getDefaultState = (): Pick<
  SongsStore,
  "songs" | "isLoadingSongs"
> => ({
  songs: [],
  isLoadingSongs: false,
});

const storeCreator = devtools<SongsStore>((set) => ({
  ...getDefaultState(),
  setSongs: (songs) => {
    set(
      (state) => ({
        ...state,
        songs,
      }),
      false,
      { type: "songs/setSongs", songs }
    );
  },
  setIsLoadingSongs: (isLoadingSongs) => {
    set(
      (state) => ({
        ...state,
        isLoadingSongs,
      }),
      false,
      { type: "songs/setIsLoadingSongs", isLoadingSongs }
    );
  },
}));

const persistStoreCreator = persist(storeCreator, {
  name: "SongsStore",
});

type Selector<S, R> = (state: S) => R;

export const songsStore = createStore<SongsStore>()(persistStoreCreator);

export function useSongsStore<R>(selector: Selector<SongsStore, R>): R;

export function useSongsStore<R>(selector: Selector<SongsStore, R>) {
  return useStore(songsStore, selector);
}
