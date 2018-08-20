import { combineReducers, Store, Dispatch } from 'redux';
import { Epic } from 'redux-observable';

import count, { Action as CountAction } from './count/reducers';
import screen, { Action as ScreenAction } from './screen/reducers';

export type AppAction = CountAction | ScreenAction;

const ducks = combineReducers({
  count,
  screen
});

export type AppState = ReturnType<typeof ducks>;

export const initialAppState = ducks(undefined, { type: '' });

export type AppStore = Store<AppState>;

export type AppEpic = Epic<AppAction, AppAction, AppState>;

export type AppDispatch = Dispatch<AppAction>;

export default ducks;
