import React from "react";
import { View } from "react-native";
import { styles } from "./container.style";
import { ContainerProps } from "../model";

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};
