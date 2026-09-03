import { createContext } from 'react';

import { DataTheme } from '../types';

export type IThemeContext = {
  theme: DataTheme;
  setTheme: (theme: DataTheme) => void;
};

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  setTheme: () => undefined,
});
