import { useMemo, type PropsWithChildren } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { styles } from "./pill.style";

export const Pill: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  const style = useMemo(() => styles(theme), [theme]);

  return <View style={style.pill}>{children}</View>;
};
