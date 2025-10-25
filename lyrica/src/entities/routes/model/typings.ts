import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  LyricDetail: undefined;
  LyricsList: undefined;
};

export type LyricDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "LyricDetail"
>;

export type LyricsListNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "LyricsList"
>;