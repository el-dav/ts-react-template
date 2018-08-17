import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ThemeProvider } from 'emotion-theming';

import theme, { muiTheme } from 'styles/theme';

import 'styles/animations.css';
import 'resources/fonts/fontawesome/css/fontawesome-all.css';
import 'styles/../index.css';

injectTapEventPlugin();

const Theme: React.SFC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
  </ThemeProvider>
);

export default Theme;
