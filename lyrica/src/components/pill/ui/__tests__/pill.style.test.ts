import { StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";
import { styles } from "../pill.style";

describe("pill.style", () => {
  it("generate styles consistent with the theme", () => {
    const s = styles(MD3LightTheme);
    const pill = StyleSheet.flatten(s.pill);

    expect(pill).toMatchObject({
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 36,
      backgroundColor: MD3LightTheme.colors.onBackground,
    });
  });

  it("updates backgroundColor if theme changes", () => {
    const customTheme = {
      ...MD3LightTheme,
      colors: {
        ...MD3LightTheme.colors,
        onBackground: "#123456",
      },
    };

    const s = styles(customTheme);
    const pill = StyleSheet.flatten(s.pill);

    expect(pill.backgroundColor).toBe("#123456");
  });
});
