import { type RootNavigationProp, RouteNames } from "@/processes/routes/model";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useMemo } from "react";
import { List } from "react-native-paper";
import type { SongListItemProps } from "../model";
import { PerformedToggler } from "@/shared/components/performed-toggler";

export const SongListItem: React.FC<SongListItemProps> = (song) => {
  const { id, title, effects } = song;

  const { navigate } = useNavigation<RootNavigationProp>();

  const onItemPress = useCallback(() => {
    navigate(RouteNames.LyricDetail, { id, title });
  }, [navigate, id, title]);

  const description = useMemo(
    () => effects?.join(", ") || "No effects",
    [effects]
  );

  return (
    <List.Item
      title={title}
      onPress={onItemPress}
      description={description}
      left={(props) => (
        <PerformedToggler
          key={id}
          id={id}
          color={props.color}
          style={props.style}
        />
      )}
    />
  );
};
