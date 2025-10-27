import React from "react";
import { View } from "react-native";
import { styles } from "./container.style";
import { type ContainerProps } from "../model";

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <View style={styles.container} testID="container">{children}</View>;
};
