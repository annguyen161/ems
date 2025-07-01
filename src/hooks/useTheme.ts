import { useColorMode } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "selected_theme";

export type ColorModeType = "light" | "dark";

export const useTheme = () => {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();
  const [isLoading, setIsLoading] = useState(true);

  // Load saved theme on app start
  useEffect(() => {
    loadSavedTheme();
  }, []);

  const loadSavedTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
        setColorMode(savedTheme);
      }
    } catch (error) {
      console.log("Error loading theme:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const changeTheme = async (newTheme: ColorModeType) => {
    try {
      setColorMode(newTheme);
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (error) {
      console.log("Error saving theme:", error);
    }
  };

  const toggleTheme = async () => {
    const newTheme = colorMode === "light" ? "dark" : "light";
    await changeTheme(newTheme);
  };

  return {
    colorMode: colorMode as ColorModeType,
    toggleColorMode: toggleTheme,
    setColorMode: changeTheme,
    isLoading,
  };
};
