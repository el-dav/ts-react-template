import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ThemeProvider } from 'styled-components';

import registerServiceWorker from './registerServiceWorker';

import store from 'app/store';
import theme, { muiTheme } from 'styles/theme';

import Root from 'app/Root/Root.cnt';

import 'styles/animations.css';
import 'resources/fonts/fontawesome/css/fontawesome-all.css';

import './index.css';

injectTapEventPlugin();

render(
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={muiTheme}>
      <Provider store={store}>
        <Root />
      </Provider>
    </MuiThemeProvider>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('app/Root/Root.cnt', () => {
      const NextRoot = require('app/Root/Root.cnt').default;
      render(
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
            <Provider store={store}>
              <NextRoot />
            </Provider>
          </MuiThemeProvider>
        </ThemeProvider>,
        document.getElementById('root') as HTMLElement
      );
    });
  }
}
registerServiceWorker();
