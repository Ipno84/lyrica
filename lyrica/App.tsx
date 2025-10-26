import { StatusBar } from "expo-status-bar";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { Navigator } from "@/entities/routes";
import { QueryProvider } from "@/entities/query";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <QueryProvider>
        <PaperProvider>
          <StatusBar style="auto" />
          <Navigator />
        </PaperProvider>
      </QueryProvider>
    </SafeAreaProvider>
  );
}
