import { FC, ReactNode, useEffect, useState } from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

const defaultTheme: Theme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;

export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    initialTheme,
}) => {
    const [theme, setTheme] = useState(initialTheme || defaultTheme);

    useEffect(() => {
        document.body.className = theme;
        return () => document.body.classList.remove(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider 
            value={{ 
                theme, 
                setTheme
            }}>
            {children}
        </ThemeContext.Provider>
    );
};

