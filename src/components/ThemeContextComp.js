import React from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#add8e6',
    },
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { },
});