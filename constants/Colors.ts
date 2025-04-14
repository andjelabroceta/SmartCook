/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const turquoise = "#40E0D0";
const darkGrey = "#474747";
const yellow = "#f2af29";
const darkPurple = "#720058";
const orange = "#ff674d";
const grey = "#d9d9d9";

export const Colors = {
  TURQUOISE: turquoise,
  PURPLE: darkPurple,
  ORANGE: orange,
  YELLOW: yellow,
  GREY: grey,
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: "#000",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
