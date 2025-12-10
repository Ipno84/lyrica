import * as SplashScreen from "expo-splash-screen";

export const setupSplashScreen = async () => {
  SplashScreen.setOptions({ fade: true });
  SplashScreen.preventAutoHideAsync();
};
