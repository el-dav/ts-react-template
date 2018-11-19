import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import registerServiceWorker from '~/registerServiceWorker';
import Theme from '~/assets/Theme';
import Store from '~/assets/Store';
import Root from '~/app/Root';

const renderAppForRoot = (RootCmp: typeof Root) => {
  render(
    <Store>
      <Theme>
        <Router>
          <RootCmp />
        </Router>
      </Theme>
    </Store>,
    document.getElementById('root') as HTMLElement
  );
};

renderAppForRoot(Root);
registerServiceWorker();

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('~/app/Root', () => {
      const NextRoot = require('~/app/Root').default;
      renderAppForRoot(NextRoot);
    });
  }
}
