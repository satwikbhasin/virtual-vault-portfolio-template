import React, { createContext, useState, useEffect } from 'react';
import { getBrandAccent, getBrandIcon } from '../yourCustomizations/brand';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('themePreference') || 'dark');
    const [brandAccent, setBrandAccent] = useState('');
    const [brandIcon, setBrandIcon] = useState(null);

    useEffect(() => {
        document.documentElement.setAttribute('themePreference', theme);
        document.body.classList.toggle('dark', theme === 'dark');

        const loadBrandAssets = async () => {
            setBrandAccent(getBrandAccent());
            setBrandIcon(getBrandIcon());
        };

        loadBrandAssets();
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('themePreference', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ brandAccent, brandIcon, theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};