import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { render, screen } from "@testing-library/react-native";
import { PaperProvider, MD3LightTheme } from "react-native-paper";

import { Pill } from "../pill";
import { styles } from "../pill.style";

describe("Pill", () => {
  it("renderizza i children", () => {
    render(
      <PaperProvider theme={MD3LightTheme}>
        <Pill>
          <Text>Inside Pill</Text>
        </Pill>
      </PaperProvider>
    );

    expect(screen.getByText("Inside Pill")).toBeOnTheScreen();
  });

  it("applica gli stili coerenti con il tema", () => {
    const { getByTestId } = render(
      <PaperProvider theme={MD3LightTheme}>
        <Pill>
          <Text>Styled</Text>
        </Pill>
      </PaperProvider>
    );

    const view = getByTestId("pill");
    const expected = StyleSheet.flatten(styles(MD3LightTheme).pill);

    expect(view).toHaveStyle(expected);
    expect(view).toHaveStyle({
      backgroundColor: MD3LightTheme.colors.onBackground,
    });
  });

  it("aggiorna lo style se cambia il tema", () => {
    const customTheme = {
      ...MD3LightTheme,
      colors: { ...MD3LightTheme.colors, onBackground: "#FF00FF" },
    };

    const { getByTestId, rerender } = render(
      <PaperProvider theme={MD3LightTheme}>
        <Pill>
          <Text>Dynamic</Text>
        </Pill>
      </PaperProvider>
    );

    rerender(
      <PaperProvider theme={customTheme}>
        <Pill>
          <Text>Dynamic</Text>
        </Pill>
      </PaperProvider>
    );

    const view = getByTestId("pill");
    expect(view).toHaveStyle({ backgroundColor: "#FF00FF" });
  });
});
