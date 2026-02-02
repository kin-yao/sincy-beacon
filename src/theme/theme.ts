import React, { createContext, useContext, useMemo, useState } from 'react';

export type ThemeColors = {
  green: string;
  greenDark: string;
  greenLight: string;
  greenPale: string;
  yellow: string;
  redLight: string;
  grayLight: string;
  grayMedium: string;
  grayDark: string;
  grayMuted: string;
  border: string;
  white: string;
  danger: string;
  background: string;
  card: string;
  text: string;
};

const lightColors: ThemeColors = {
  green: '#1D7A3E',
  greenDark: '#0F5A2A',
  greenLight: '#E8F3EC',
  greenPale: '#DCEBDF',
  yellow: '#F2C94C',
  redLight: '#FCE8EA',
  grayLight: '#F5F6F8',
  grayMedium: '#B0B8C1',
  grayDark: '#1B1F23',
  grayMuted: '#6B7280',
  border: '#E3E8EF',
  white: '#FFFFFF',
  danger: '#E63946',
  background: '#F5F6F8',
  card: '#FFFFFF',
  text: '#1B1F23',
};

const darkColors: ThemeColors = {
  green: '#34A853',
  greenDark: '#1B5E3C',
  greenLight: '#1B2B22',
  greenPale: '#22362C',
  yellow: '#F2C94C',
  redLight: '#3A1E20',
  grayLight: '#101317',
  grayMedium: '#5E6670',
  grayDark: '#F3F4F6',
  grayMuted: '#A1A8B3',
  border: '#222831',
  white: '#111418',
  danger: '#FF6B6B',
  background: '#0E1116',
  card: '#111418',
  text: '#F3F4F6',
};

type ThemeContextValue = {
  colors: ThemeColors;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  colors: lightColors,
  isDark: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const value = useMemo(
    () => ({
      colors: isDark ? darkColors : lightColors,
      isDark,
      toggleTheme: () => setIsDark((prev) => !prev),
    }),
    [isDark],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  return useContext(ThemeContext);
}
