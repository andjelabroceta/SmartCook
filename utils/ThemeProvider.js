import { createContext, useContext, useEffect, useState } from "react";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "react-native";

export const ThemeContext = createContext({
  dark: false,
  colors: Colors.light,
  setScheme: () => {},
});

export const ThemeProvider = (props) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme == "dark");
  useEffect(() => {
    setIsDark(colorScheme == "dark");
  }, [colorScheme]);

  const defaultTheme = {
    dark: isDark,
    colors: isDark ? Colors.dark : Colors.light,
    setScheme: (scheme) => {
      setIsDark(scheme == "dark");
    },
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const createThemedStyles = (styleCreator) => {
  return () => {
    const { dark, colors } = useTheme();
    return styleCreator(colors, dark);
  };
};
