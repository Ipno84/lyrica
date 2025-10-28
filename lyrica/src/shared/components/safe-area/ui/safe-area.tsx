import React, { type PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const SafeArea: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      {children}
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
