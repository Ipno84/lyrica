import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LyricsList } from "@/pages/lyrics-list";
import { LyricDetail } from "@/pages/lyric-detail";
import { Settings } from "@/pages/settings";

const RootStack = createNativeStackNavigator({
  initialRouteName: "LyricsList",
  screens: {
    LyricsList,
    LyricDetail,
    Settings,
  },
});

export const Navigator = createStaticNavigation(RootStack);
