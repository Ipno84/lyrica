import { StatusBar } from "expo-status-bar";
import React from "react";
import { PaperProvider } from "react-native-paper";

import { Navigator } from "@/processes/routes";
import { QueryProvider } from "@/processes/query";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { beforeInit, useOnInit } from "@/processes/boostrap";
import { theme } from "@/features/theme";
import { SafeArea } from "@/shared/components/safe-area";

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
