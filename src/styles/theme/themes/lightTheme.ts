import { themeFromPalette } from '~/styles/theme/appTheme';
import { CoreColors, coreColors } from '~/styles/theme/coreColors';
import { paletteFromCoreColors } from '~/styles/theme/palette';

const lightTheme = (baseColors?: CoreColors) => {
  const lightCoreColors = baseColors || coreColors();
  const palette = paletteFromCoreColors(lightCoreColors);
  return themeFromPalette(palette);
};

export default lightTheme;
