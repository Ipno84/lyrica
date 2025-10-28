import { IconButton, useTheme } from "react-native-paper";
import type { NavigationIconButtonProps } from "../models";

export const NavigationIconButton: React.FC<NavigationIconButtonProps> = ({
  icon,
  iconColor,
  size,
  onPress,
}) => {
  const theme = useTheme();

  return (
    <IconButton
      icon={icon}
      iconColor={iconColor || theme.colors.onBackground}
      size={size || 32}
      onPress={onPress}
    />
  );
};
