import { createMuiTheme } from '@material-ui/core/styles';

import palette from './colors';

const theme = {
  palette
};

export const muiTheme = createMuiTheme();

export type Theme = typeof theme;

export default theme;
