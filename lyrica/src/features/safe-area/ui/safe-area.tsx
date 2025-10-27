import React, { type PropsWithChildren } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./safe-area.style";

export const SafeArea: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      {children}
    </SafeAreaView>
  );
};
