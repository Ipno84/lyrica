import { StyleSheet } from "react-native";
import { styles } from "../container.style";

describe("styles", () => {
  it("Displays containers with the expected rules", () => {
    const container = StyleSheet.flatten(styles.container);

    expect(container).toMatchObject({
      flex: 1,
      justifyContent: "center",
    });

    expect(Object.keys(container).sort()).toEqual(["flex", "justifyContent"]);
  });

  it("Snapshot of the container (flattened)", () => {
    const container = StyleSheet.flatten(styles.container);
    expect(container).toMatchSnapshot();
  });
});
