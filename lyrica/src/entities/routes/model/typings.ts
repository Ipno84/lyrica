import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteNames } from "./constants";

export type LyricDetailNavigationProp = {
  id: string;
  title: string;
};

export type RootStackParamList = {
  [RouteNames.LyricDetail]: LyricDetailNavigationProp;
  [RouteNames.LyricsList]: undefined;
  [RouteNames.Settings]: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
