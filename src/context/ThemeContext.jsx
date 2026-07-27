import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();
/*
I prefer this way of setting the theme based on the user's system preference.
This respects their choice and initializes the website in the mode that they want.
*/
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? 'dark-theme app-wrapper' : 'app-wrapper'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}