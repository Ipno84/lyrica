import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import type { VersesProps } from "../model";

export const Verses: React.FC<VersesProps> = ({ verses }) => {
  return (
    <View style={styles.wrapper}>
      {verses.map((verse, index) => (
        <Text key={index} style={styles.text}>
          {verse}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    padding: 64,
  },
  text: {
    marginBottom: 16,
    fontSize: 32,
    textAlign: "center",
  },
});
