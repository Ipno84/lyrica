import { setupSplashScreen } from "./setup-splash-screen";
import { setupKeepAwake } from "./setup-keep-awake";

export const beforeInit = async () => {
  setupSplashScreen();
  await setupKeepAwake();
};
