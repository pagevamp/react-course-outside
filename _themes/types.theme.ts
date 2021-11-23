export type IThemeColors = Record<string, string> & {
  primary?: string;
  secondary?: string;
  brand?: string;
  accent?: string;
  error?: string;
  success?: string;
  dark?: string;
  black?: string;
};

export type IThemeBreakPoints = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

export type IThemeFonts = Record<string, string> & {
  ['default-family']?: string;
};

export type IThemeSpaces = Record<number, string>;

export type ITheme = {
  colors?: IThemeColors;
  backgrounds?: IThemeColors;
  screens?: IThemeBreakPoints;
  spaces?: IThemeSpaces;
  fonts?: IThemeFonts;
};

export interface IThemes {
  base: ITheme;
  default: ITheme;
  dark: ITheme;
  custom: ITheme;
}
