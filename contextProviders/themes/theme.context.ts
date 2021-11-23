import { createContext } from 'react';
import { ITheme } from 'themes/types.theme';

export type IThemeSwitcher = (theme: ITheme) => void;

export const ThemeContext = createContext({ switchTheme: ((_theme) => {}) as IThemeSwitcher });
ThemeContext.displayName = 'Theme';

export const ThemeProvider = ThemeContext.Provider;
