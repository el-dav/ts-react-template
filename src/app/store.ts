import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { AppStore, AppAction, AppState } from '~/ducks';
import ducks from '~/ducks/ducks';
import epics from '~/ducks/epics';
import DevTools from '~/assets/DevTools/DevTools.cnt';

const epicMiddleware = createEpicMiddleware<AppAction, AppAction, AppState>();

let store: AppStore;

if (process.env.NODE_ENV === 'development') {
  /* tslint:disable-next-line:no-var-requires */
  store = createStore(
    ducks,
    DevTools
      ? compose(
          applyMiddleware(epicMiddleware),
          DevTools.instrument()
        )
      : compose(applyMiddleware(epicMiddleware))
  );
} else {
  store = createStore(ducks, compose(applyMiddleware(epicMiddleware)));
}

epicMiddleware.run(epics);

export default store;
