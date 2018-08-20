import { themeFromBaseTheme } from 'styles/theme/appTheme';
import { baseThemeFromPalette } from 'styles/theme/baseTheme';
import { CoreColors, coreColors } from 'styles/theme/coreColors';
import { paletteFromCoreColors } from 'styles/theme/palette';
import { darken, lighten } from 'styles/theme/utils';

const getDarkPrimary = (color: string) => ({
  '0': darken(color, 30),
  '1': darken(color, 40),
  '2': color,
  '3': darken(color, 10)
});
const getDarkSecondary = (color: string) => ({
  '0': lighten(color, 100),
  '1': lighten(color, 95),
  '2': lighten(color, 90),
  '3': lighten(color, 80)
});

export const darkTheme = (baseColors?: CoreColors) => {
  const darkCoreColors = baseColors || coreColors();
  const primary = getDarkPrimary(darkCoreColors.brandPrimary);
  const secondary = getDarkSecondary(darkCoreColors.brandSecondary);

  const palette = {
    ...paletteFromCoreColors(darkCoreColors),
    primary,
    secondary
  };
  const baseTheme = baseThemeFromPalette(palette);

  return themeFromBaseTheme({
    ...baseTheme,
    text: {
      ...baseTheme.text,
      light: palette.secondary[0],
      dark: palette.primary[2]
    },
    background: {
      ...baseTheme.background,
      light: palette.secondary[0],
      dark: palette.primary[2]
    }
  });
};

export default darkTheme;
