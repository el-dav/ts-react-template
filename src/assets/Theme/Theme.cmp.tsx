import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'emotion-theming';

import { muiTheme, lightTheme } from 'styles/theme';

import { injectGlobalStyles, injectGlobalAnimations } from './styleUtils';

injectGlobalStyles();
injectGlobalAnimations();

const Theme: React.SFC<{}> = ({ children }) => (
  <ThemeProvider theme={lightTheme()}>
    <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
  </ThemeProvider>
);

export default Theme;
