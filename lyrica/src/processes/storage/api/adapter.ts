import { Storage } from "expo-storage";
import { type StateStorage } from "zustand/middleware";

export const adapter: StateStorage<Promise<void>> = {
  getItem: async (key: string) => await Storage.getItem({ key }),
  setItem: async (key: string, value: string) =>
    await Storage.setItem({
      key,
      value,
    }),
  removeItem: async (key: string) => await Storage.removeItem({ key }),
};
