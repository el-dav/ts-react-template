import { BaseTheme, baseThemeFromPalette } from '~/styles/theme/baseTheme';
import { CoreColors, coreColors } from '~/styles/theme/coreColors';
import { Palette, paletteFromCoreColors } from '~/styles/theme/palette';

export const themeFromBaseTheme = (baseTheme: BaseTheme) => {
  return {
    ...baseTheme
  };
};
export const themeFromPalette = (palette: Palette) =>
  themeFromBaseTheme(baseThemeFromPalette(palette));
export const themeFromCoreColors = (colors: CoreColors) =>
  themeFromPalette(paletteFromCoreColors(colors));
export const defaultTheme = () => themeFromCoreColors(coreColors());

export type Theme = ReturnType<typeof defaultTheme>;
