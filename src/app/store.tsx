import { browserHistory } from 'react-router/lib';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import ducks from 'ducks/ducks';
import epics from 'ducks/epics';
import DevTools from 'assets/DevTools/DevTools.cnt';

const epicMiddleware = createEpicMiddleware(epics);
const reduxRouterMiddleware = routerMiddleware(browserHistory);

let store;

if (process.env.NODE_ENV === 'development') {
  /* tslint:disable-next-line:no-var-requires */
  store = createStore(
    ducks,
    compose(
      applyMiddleware(reduxRouterMiddleware, epicMiddleware),
      DevTools && DevTools.instrument()
    )
  );
} else {
  store = createStore(
    ducks,
    compose(applyMiddleware(reduxRouterMiddleware, epicMiddleware))
  );
}

export default store;
