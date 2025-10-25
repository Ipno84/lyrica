import "react-native-gesture-handler";
import "react-native-reanimated";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { Navigator } from "@/entities/routes";

const App: React.FC = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <PaperProvider>
        <StatusBar style="auto" />
        <Navigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
