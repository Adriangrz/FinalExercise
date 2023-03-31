export type PaletteColor = {
  dark?: string;
  light?: string;
  main: string;
};

type ThemePalette = {
  [key: string]: PaletteColor;
};

type ThemeFontSizes = {
  body: number;
  bodyLarge: number;
  bodySmall: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
};

type ThemeSpacings = {
  base: number;
  lg: number;
  md: number;
  sm: number;
};

export type ThemeType = {
  fontSizes: ThemeFontSizes;
  palette: ThemePalette;
  spacings: ThemeSpacings;
};
