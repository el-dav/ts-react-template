import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router } from 'react-router-dom';

import registerServiceWorker from 'registerServiceWorker';

import store from 'app/store';
import theme, { muiTheme } from 'styles/theme';

import Root from 'app/Root';

import 'styles/animations.css';
import 'resources/fonts/fontawesome/css/fontawesome-all.css';

import './index.css';

const renderAppForRoot = RootCmp => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <Router>
            <RootCmp />
          </Router>
        </MuiThemeProvider>
      </ThemeProvider>
    </Provider>,
    document.getElementById('root') as HTMLElement
  );
};

injectTapEventPlugin();
renderAppForRoot(Root);
registerServiceWorker();

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('app/Root', () => {
      const NextRoot = require('app/Root').default;
      renderAppForRoot(NextRoot);
    });
  }
}
