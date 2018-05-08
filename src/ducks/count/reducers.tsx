import { INCREASE, DECREASE } from './constants';

export type State = Readonly<{
  total: number;
}>;

const initialState: State = {
  total: 0
};

const count = (state = initialState, action): State => {
  switch (action.type) {
    case INCREASE:
      return { ...state, total: state.total + 1 };
    case DECREASE:
      return { ...state, total: state.total - 1 };
    default:
      return state;
  }
};

export default count;
