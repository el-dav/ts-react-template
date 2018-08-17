import { ofType, combineEpics } from 'redux-observable';
import { delay, mapTo, tap } from 'rxjs/operators';
// import { ignoreElements } from 'rxjs/operators/ignoreElements';

import { increase } from './actions';
import { INCREASE_ASYNC } from './constants';

const async = action$ =>
  action$.pipe(
    ofType(INCREASE_ASYNC),
    delay(2000),
    tap(() => {
      global.console.log('doing async action');
    }),
    mapTo(increase())
  );

export default combineEpics(async);
