/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ITheme, IThemeColors, IThemeSpaces } from '@/_themes/types.theme';

export function getMappedThemeValues(theme: ITheme, key: keyof ITheme, collector?: any[]) {
  const data = theme[key];
  if (!data) {
    return {};
  }
  return Object.keys(data).reduce((obj, variable) => {
    // @ts-ignore
    const val = data[variable] as string | undefined;
    if (val) {
      const variableName = `--${key}-${variable}`;
      collector?.push({
        key: variableName,
        value: val,
      });

      obj[variableName] = val;
    }
    return obj;
  }, {} as Record<string, string>);
}

function setVariables(
  data: Record<string, string>,
  root = typeof document !== 'undefined' ? document?.documentElement : undefined
) {
  Object.keys(data).forEach((key) => {
    const val = data[key];
    root?.style?.setProperty(key, val);
  });
}

export function getTailwindConfig<T = string>(theme: ITheme) {
  const themeData = {} as ITheme;
  Object.keys(theme).forEach((prop) => {
    const property = prop as keyof ITheme;
    const properties = theme[property] as IThemeColors | IThemeSpaces;
    Object.keys(properties || {}).forEach((key) => {
      // @ts-ignore
      themeData[property] ||= {};
      // @ts-ignore
      themeData[property][key] = `var(--${property}-${key})`;
    });
  });

  return themeData;
}

export const applyCustomTheme = (theme: ITheme): void => {
  const root = typeof document !== 'undefined' ? document?.documentElement : undefined;

  const themeData = [] as { key: string; value: string }[];
  Object.keys(theme).forEach((property) => {
    const data = getMappedThemeValues(theme, property as keyof ITheme);
    setVariables(data, root);
  });
};

export function getThemeStyles(theme: ITheme) {
  const data = [] as { key: string; value: string }[];
  Object.keys(theme).forEach((property) => {
    getMappedThemeValues(theme, property as keyof ITheme, data);
  });
  return data;
}
