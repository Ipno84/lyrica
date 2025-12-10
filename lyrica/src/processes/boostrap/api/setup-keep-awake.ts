import * as KeepAwake from "expo-keep-awake";

export const setupKeepAwake = async () => {
  const isKeepAwakeAvailable = await KeepAwake.isAvailableAsync();
  if (isKeepAwakeAvailable) {
    await KeepAwake.activateKeepAwakeAsync();
  }
};
