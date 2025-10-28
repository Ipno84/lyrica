import { StyleSheet } from "react-native";
import type { MD3Theme } from "react-native-paper";

export const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    pill: {
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: theme.colors.onBackground,
      borderRadius: 36,
    },
  });
