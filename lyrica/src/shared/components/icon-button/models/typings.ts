import type { IconSource } from "react-native-paper/lib/typescript/components/Icon";

export type NavigationIconButtonProps = {
  icon: IconSource;
  onPress: () => void;
  iconColor?: string;
  size?: number;
};
