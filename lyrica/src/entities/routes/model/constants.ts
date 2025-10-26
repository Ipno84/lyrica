export const RouteNames = {
  LyricDetail: "LyricDetail",
  LyricsList: "LyricsList",
  Settings: "Settings",
} as const;

export type RouteNames = (typeof RouteNames)[keyof typeof RouteNames];
