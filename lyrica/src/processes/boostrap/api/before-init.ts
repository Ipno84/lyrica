import * as SplashScreen from "expo-splash-screen";

export const beforeInit = () => {
  SplashScreen.setOptions({ fade: true });
  SplashScreen.preventAutoHideAsync();
};
