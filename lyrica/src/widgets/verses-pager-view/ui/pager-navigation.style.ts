import { StyleSheet } from "react-native";
import type { MD3Theme } from "react-native-paper";

export const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    pagerNavigation: {
      alignItems: "center",
      padding: 16,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    left: {
      flex: 1,
    },
    right: {
      flex: 1,
      alignItems: "flex-end",
    },
    text: {
      color: theme.colors.background,
      fontWeight: "bold",
    },
  });
