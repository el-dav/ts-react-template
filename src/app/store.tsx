import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { AppState } from 'ducks';
import ducks from 'ducks/ducks';
import epics from 'ducks/epics';
import DevTools from 'assets/DevTools/DevTools.cnt';

const epicMiddleware = createEpicMiddleware();

let store: Store<AppState>;

if (process.env.NODE_ENV === 'development') {
  /* tslint:disable-next-line:no-var-requires */
  store = createStore(
    ducks,
    compose(
      applyMiddleware(epicMiddleware),
      DevTools && DevTools.instrument()
    )
  );
} else {
  store = createStore(ducks, compose(applyMiddleware(epicMiddleware)));
}

epicMiddleware.run(epics);

export default store;
