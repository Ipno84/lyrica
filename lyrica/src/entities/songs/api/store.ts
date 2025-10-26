import { useStore } from "zustand";
import { createStore } from "zustand/vanilla";
import { type SongsStore } from "../model";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { adapter } from "@/entities/storage";

export const getDefaultState = (): Pick<
  SongsStore,
  "songs" | "isLoadingSongs" | "hasHydrated"
> => ({
  songs: [],
  isLoadingSongs: false,
  hasHydrated: false,
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
  setHasHydrated: (hasHydrated) => {
    set(
      (state) => ({
        ...state,
        hasHydrated,
      }),
      false,
      { type: "songs/setHasHydrated", hasHydrated }
    );
  },
}));

const persistStoreCreator = persist(storeCreator, {
  name: "SongsStore",
  storage: createJSONStorage<Pick<SongsStore, "songs">>(() => adapter),
  version: 1,
  partialize: ({ songs }) => ({ songs }),
  // TODO: handle future migrations
  // migrate: async (persisted, version) => {
  //   if (version < 1) {
  //     return { userId: null, ...persisted } as any;
  //   }
  //   return persisted as any;
  // },
});

type Selector<S, R> = (state: S) => R;

export const songsStore = createStore<SongsStore>()(persistStoreCreator);

export function useSongsStore<R>(selector: Selector<SongsStore, R>): R;

export function useSongsStore<R>(selector: Selector<SongsStore, R>) {
  return useStore(songsStore, selector);
}
