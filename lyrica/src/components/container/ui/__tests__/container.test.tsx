import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { render, screen } from "@testing-library/react-native";

import { Container } from "../container";
import { styles } from "../container.style";

describe("Container", () => {
  it("renderizza i children", () => {
    render(
      <Container>
        <Text>Inside Component</Text>
      </Container>
    );

    expect(screen.getByText("Inside Component")).toBeOnTheScreen();
  });

  it("applica lo style container previsto", () => {
    const { getByTestId } = render(
      <Container>
        <Text>Inside</Text>
      </Container>
    );

    const view = getByTestId("container");
    // flattiamo lo style per evitare differenze di rappresentazione
    const expected = StyleSheet.flatten(styles.container);

    expect(view).toHaveStyle(expected);
    // opzionale: asserzione puntuale sulle chiavi attese
    expect(expected).toMatchObject({ flex: 1, justifyContent: "center" });
  });
});
