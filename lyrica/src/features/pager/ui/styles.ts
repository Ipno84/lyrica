import { StyleSheet } from "react-native";
import { type MD3Theme } from "react-native-paper";

export const themeStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    pagerNavigation: {
      alignItems: "center",
      padding: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      position: "absolute",
      bottom: 0,
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
