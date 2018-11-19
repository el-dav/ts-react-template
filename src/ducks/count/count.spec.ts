import { Subject, PartialObserver } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { Action } from 'redux';
import { StateObservable, ActionsObservable } from 'redux-observable';

import { initialAppState, AppState } from '~/ducks';

import * as actions from './actions';
import * as selectors from './selectors';
import * as epics from './epics';
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

  describe('epics', () => {
    let input$: Subject<Action>;
    let store$: Subject<AppState>;
    let state$: StateObservable<AppState>;
    let action$: ActionsObservable<Action>;
    let subscriber: PartialObserver<any>;

    const deepEquals = (actual: any, expected: any) => {
      expect(actual).toEqual(expected);
    };

    const mockSubscriber = () => ({
      next: jest.fn(),
      error: jest.fn(),
      complete: jest.fn()
    });

    beforeEach(() => {
      input$ = new Subject<Action>();
      store$ = new Subject<AppState>();
      state$ = new StateObservable<AppState>(store$, initialAppState);
      action$ = new ActionsObservable<Action>(input$);
      subscriber = mockSubscriber();
    });

    it('should map INCRESE_ASYNC to an INCREASE action', () => {
      const testScheduler = new TestScheduler(deepEquals);
      const dependancies = {};
      testScheduler.run(() => {
        epics.async(action$, state$, dependancies).subscribe(subscriber);

        input$.next(actions.increaseAsync());
        expect(subscriber.next).toHaveBeenCalledTimes(0);
        testScheduler.flush();
        expect(subscriber.next).toHaveBeenCalledTimes(1);
        expect(subscriber.next).toHaveBeenCalledWith(actions.increase());
      });
    });
  });
});
