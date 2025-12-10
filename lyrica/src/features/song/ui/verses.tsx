import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import type { VersesProps } from "../model";
import { styles } from "./styles";

export const Verses: React.FC<VersesProps> = ({ verses }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.wrapper}>
        {verses.map((verse, index) => (
          <Text key={index} style={styles.text}>
            {verse}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};
