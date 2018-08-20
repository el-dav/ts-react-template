import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import constants from './constants';

export type State = Readonly<{
  total: number;
}>;

export type Action = ActionType<typeof actions>;

const initialState: State = {
  total: 0
};

const count = (state = initialState, action: Action): State => {
  switch (action.type) {
    case constants.INCREASE:
      return { ...state, total: state.total + 1 };
    case constants.DECREASE:
      return { ...state, total: state.total - 1 };
    default:
      return state;
  }
};

export default count;
