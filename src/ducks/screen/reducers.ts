import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import constants from './constants';

export type State = Readonly<{
  width: number;
  height: number;
}>;

export type Action = ActionType<typeof actions>;

const initialSizes: State = {
  width: 0,
  height: 0
};

const getInitialState = () =>
  typeof window === 'object'
    ? { width: window.innerWidth, height: window.innerHeight }
    : initialSizes;

const screen = (
  state = getInitialState(),
  { type, payload }: Action
): State => {
  switch (type) {
    case constants.SCREEN_RESIZE:
      return { ...state, width: payload.width, height: payload.height };
    default:
      return state;
  }
};

export default screen;
