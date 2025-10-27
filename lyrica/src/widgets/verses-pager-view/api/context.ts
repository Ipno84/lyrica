import { createContext } from "react";
import type { ViewPagerContextType } from "../model";

export const ThemeContext = createContext<ViewPagerContextType | null>(null);
