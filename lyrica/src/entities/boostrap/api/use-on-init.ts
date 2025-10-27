import { useEffect, useRef, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

export const useOnInit = () => {
  const [appReady, setAppReady] = useState(false);
  const splashScreenShown = useRef(!appReady);

  useEffect(() => {
    const appSetup = async () => {
      try {
        // Setup here any services needed before app is ready
        await Promise.resolve();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
      }
    };

    appSetup();
  }, []);

  useEffect(() => {
    if (appReady && splashScreenShown.current) {
      SplashScreen.hide();
      splashScreenShown.current = false;
    }
  }, [appReady]);

  return appReady;
};
