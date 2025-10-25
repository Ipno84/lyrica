import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LyricsList } from "@/pages/lyrics-list";
import { LyricDetail } from "@/pages/lyric-detail";

const RootStack = createNativeStackNavigator({
  initialRouteName: "LyricsList",
  screens: {
    LyricsList,
    LyricDetail,
  },
});

export const Navigator = createStaticNavigation(RootStack);
