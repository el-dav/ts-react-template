import { ofType, combineEpics } from 'redux-observable';
import { tap } from 'rxjs/operators/tap';
import { delay } from 'rxjs/operators/delay';
import { mergeMap } from 'rxjs/operators/mergeMap';
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
    mergeMap(() => [increase()])
  );

export default combineEpics(async);
