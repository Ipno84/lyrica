import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { PaperProvider } from "react-native-paper";
import { Navigator } from "@/entities/routes";
import { QueryProvider } from "@/entities/query";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.setOptions({
  fade: true,
});
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const splashScreenShown = useRef(!appReady);

  useEffect(() => {
    const appSetup = async () => {
      try {
        // TODO: Load Firebase Configuration
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

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <QueryProvider>
        <PaperProvider>
          {appReady ? (
            <>
              <StatusBar style="auto" />
              <Navigator />
            </>
          ) : null}
        </PaperProvider>
      </QueryProvider>
    </SafeAreaProvider>
  );
}
