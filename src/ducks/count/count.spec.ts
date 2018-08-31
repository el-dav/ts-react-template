import { initialAppState, AppState } from '~/ducks';

import * as actions from './actions';
import * as selectors from './selectors';
import countReducer, { State } from './reducers';

const state: State = { total: 0 };
const appState: AppState = { ...initialAppState, count: state };

describe('count reducer', () => {
  describe('actions', () => {
    it('should handle increase', () => {
      expect(countReducer(state, actions.increase()).total).toBe(1);
    });

    it('should handle decrease', () => {
      expect(countReducer(state, actions.decrease()).total).toBe(-1);
    });
  });

  describe('selectors', () => {
    it('should selectState', () => {
      expect(selectors.selectState(appState)).toBe(state);
    });

    it('should selectTotal', () => {
      expect(selectors.selectTotal(appState)).toBe(0);
    });
  });
});
