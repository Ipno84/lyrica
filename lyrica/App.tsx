import { StatusBar } from "expo-status-bar";
import React from "react";
import { PaperProvider } from "react-native-paper";

import { Navigator } from "@/entities/routes";
import { QueryProvider } from "@/entities/query";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { beforeInit, useOnInit } from "@/entities/boostrap";
import { theme } from "@/features/theme";
import { SafeArea } from "@/features/safe-area";

beforeInit();

export default function App() {
  const appReady = useOnInit();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <QueryProvider>
        <PaperProvider theme={theme}>
          <StatusBar style="auto" />
          {appReady ? (
            <>
              <SafeArea>
                <Navigator theme={theme} />
              </SafeArea>
            </>
          ) : null}
        </PaperProvider>
      </QueryProvider>
    </SafeAreaProvider>
  );
}
