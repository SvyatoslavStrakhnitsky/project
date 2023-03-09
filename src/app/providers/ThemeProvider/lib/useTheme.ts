import { useContext } from "react";
import { Theme, ThemeContext } from "./ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localStorage";

export const useTheme = () => {
    const themeState = useContext(ThemeContext);

    if (themeState === null) {
        throw new Error(
            "Theme state not found. Try wrapping a parent component with <ThemeProvider>."
        );
    }

    const { theme, setTheme } = themeState;

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme
    };
};
