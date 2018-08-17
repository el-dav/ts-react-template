import { combineReducers } from 'redux';

import count from './count/reducers';
import screen from './screen/reducers';

const ducks = combineReducers({
  count,
  screen
});

export type AppState = ReturnType<typeof ducks>;

export const initialAppState = ducks(undefined, { type: '' });

export default ducks;
