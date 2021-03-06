import { darkest, lightest } from '~/styles/theme/utils';
import { Palette } from '~/styles/theme/palette';

const background = (palette: Palette) => ({
  primary: palette.primary[0],
  secondary: palette.secondary[3],
  dark: darkest(palette.secondary[3], palette.primary[0]),
  light: lightest(palette.secondary[3], palette.primary[0])
});

export default background;
