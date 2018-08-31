import { combineEpics } from 'redux-observable';
import { delay, mapTo, tap, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import { AppEpic } from '~/ducks';

import { increase } from './actions';
import constants from './constants';

const async: AppEpic = (action$, state$) =>
  action$.pipe(
    filter(isOfType(constants.INCREASE_ASYNC)),
    delay(2000),
    tap(() => {
      global.console.log('old count:', state$.value.count);
    }),
    mapTo(increase())
  );

export default combineEpics(async);
