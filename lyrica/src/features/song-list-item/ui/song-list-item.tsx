import { type RootNavigationProp, RouteNames } from "@/entities/routes/model";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useMemo } from "react";
import { List } from "react-native-paper";
import type { SongListItemProps } from "../model";
import { SongListItemLeft } from "./song-list-item-left";

export const SongListItem: React.FC<SongListItemProps> = (song) => {
  const { id, title, effects, index } = song;

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
      title={`#${index} ${title}`}
      onPress={onItemPress}
      description={description}
      left={(props) => (
        <SongListItemLeft
          key={id}
          id={id}
          color={props.color}
          style={props.style}
        />
      )}
    />
  );
};
