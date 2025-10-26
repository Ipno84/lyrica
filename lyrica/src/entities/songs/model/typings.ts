export type Song = {
  id: string;
  title: string;
  priority: number;
  keys?:
    | ""
    | "C"
    | "C#"
    | "D"
    | "D#"
    | "E"
    | "F"
    | "F#"
    | "G"
    | "G#"
    | "A"
    | "A#"
    | "B";
  verses: string[];
  effects?: string[];
};

export type SongsStore = {
  songs: Song[];
  isLoadingSongs: boolean;
  hasHydrated: boolean;
  setSongs: (songs: Song[]) => void;
  setIsLoadingSongs: (isLoading: boolean) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};
