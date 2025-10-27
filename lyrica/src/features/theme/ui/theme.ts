// theme.ts
import {
  MD3DarkTheme as PaperDark,
  configureFonts,
  type MD3Theme,
} from "react-native-paper";
import {
  DarkTheme as NavDark,
  type Theme as NavTheme,
} from "@react-navigation/native";
import { adaptNavigationTheme } from "react-native-paper";

const { DarkTheme: AdaptedNavDark } = adaptNavigationTheme({
  reactNavigationDark: NavDark,
});

// Font leggermente più grandi per leggibilità (opzionale)
const fonts = configureFonts({ config: { fontSize: 16 } });

// Palette OLED-friendly
const primary = "#7DD3FC"; // accento azzurro soft (sufficiente contrasto su nero)
const primaryOn = "#001018";
const secondary = "#A7F3D0"; // verde acqua tenue per stati/OK
const secondaryOn = "#00120E";
const error = "#FCA5A5";
const errorOn = "#210000";

export const theme: MD3Theme & NavTheme = {
  ...PaperDark,
  ...AdaptedNavDark,
  dark: true,
  fonts: fonts as any,
  // meno animazioni = meno consumo (opzionale)
  animation: { scale: 0.9 },
  colors: {
    ...PaperDark.colors,
    ...AdaptedNavDark.colors,

    // Base: nero assoluto per risparmio su OLED
    background: "#000000",
    surface: "#000000",
    surfaceVariant: "#0A0A0A",
    elevation: {
      level0: "#000000",
      level1: "#0A0A0A",
      level2: "#0F0F0F",
      level3: "#131313",
      level4: "#161616",
      level5: "#181818",
    },

    // Testi ad altissimo contrasto
    onBackground: "#FFFFFF",
    onSurface: "#EDEDED",
    onSurfaceVariant: "#C7C7C7",
    outline: "#3A3A3A",
    outlineVariant: "#2A2A2A",

    // Accenti sobri (evita grandi superfici luminose)
    primary,
    onPrimary: primaryOn,
    primaryContainer: "#03202B",
    onPrimaryContainer: "#BFEFFF",

    secondary,
    onSecondary: secondaryOn,
    secondaryContainer: "#05201B",
    onSecondaryContainer: "#D8FFF0",

    // Tertiary (opzionale, usalo poco)
    tertiary: "#C7B2FF",
    onTertiary: "#190032",
    tertiaryContainer: "#220B41",
    onTertiaryContainer: "#F1E9FF",

    // Errori
    error,
    onError: errorOn,
    errorContainer: "#2A0000",
    onErrorContainer: "#FFDADA",

    // Inverse (per chip/toast)
    inverseSurface: "#EDEDED",
    inverseOnSurface: "#121212",
    inversePrimary: "#9ADCFD",

    // Shadow/scrim
    shadow: "#000000",
    scrim: "#000000",

    // React Navigation keys (allineati)
    card: "#000000",
    text: "#FFFFFF",
    border: "#1F1F1F",
    notification: primary,
  },
};
