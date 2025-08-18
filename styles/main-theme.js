import { StyleSheet, useColorScheme } from "react-native";

export const CommonStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
    textAlign: "center",
  },
});

// src/constants/theme.ts
export const DarkColors = {
  primary: "#05cfbe",
  secondary: "#1e1e1e",
  background: "#030303",
  text: "#ffffff",
  red: "#d42f31",
  gold: "#f79120",
  aqua: "#05cfbe",
  subtitle: "#767676",
};

export const LightColors = {
  primary: "#7b03ff",
  secondary: "#2a2a2a",
  background: "#030303",
  text: "#ffffff",
  red: "#d42f31",
  gold: "#f79120",
  aqua: "#05cfbe",
  subtitle: "#767676",
};

export function useThemeColors() {
  const scheme = useColorScheme(); // "light" | "dark"
  return scheme === "dark" ? DarkColors : LightColors;
}

export const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

export const Fonts = {
  regular: "System",
  bold: "System-Bold",
};
