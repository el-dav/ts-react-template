import { combineReducers } from 'redux';

import count, { State as CountState } from './count/reducers';
import routing, { State as RoutingState } from './routing/reducers';
import screen, { State as SreenState } from './screen/reducers';

export default combineReducers({
  count,
  routing,
  screen
});

export interface State {
  count: CountState;
  routing: RoutingState;
  screen: SreenState;
}
