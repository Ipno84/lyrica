export type Song = {
  id: string;
  title: string;
  priority: number;
  keys?: string;
  verses: string[];
  effects?: string[];
};

export type SongsStore = {
  songs: Song[];
  performedSongs: Song["id"][];
  isLoadingSongs: boolean;
  hasHydrated: boolean;
  setSongs: (songs: Song[]) => void;
  setIsLoadingSongs: (isLoading: boolean) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
  togglePerformedSong: (songId: Song["id"]) => void;
};
