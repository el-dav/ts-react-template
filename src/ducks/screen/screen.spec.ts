import { initialAppState, AppState } from 'ducks';

import * as actions from './actions';
import * as selectors from './selectors';
import screenReducer, { State } from './reducers';
import { SIZES } from './config';

const state: State = {
  width: 100,
  height: 300
};

const appState: AppState = { ...initialAppState, screen: state };

type IsSelector = (selectorState: AppState) => boolean;
const testIsSize = (
  selectorName: string,
  selector: IsSelector,
  lower?: number,
  upper?: number
) => {
  if (lower) {
    it(`should ${selectorName} for outside lower boundary`, () => {
      const testState = {
        ...appState,
        screen: { height: 100, width: lower - 1 }
      };
      expect(selector(testState)).toBe(false);
    });

    it(`should ${selectorName} for inside lower boundary`, () => {
      const testState = { ...appState, screen: { height: 100, width: lower } };
      expect(selector(testState)).toBe(true);
    });
  }

  if (upper) {
    it(`should ${selectorName} for outside upper boundary`, () => {
      const testState = {
        ...appState,
        screen: { height: 100, width: upper + 1 }
      };
      expect(selector(testState)).toBe(false);
    });

    it(`should ${selectorName} for inside lower boundary`, () => {
      const testState = { ...appState, screen: { height: 100, width: upper } };
      expect(selector(testState)).toBe(true);
    });
  }
};

const testIsGt = (
  selectorName: string,
  selector: IsSelector,
  upper: number
) => {
  it(`should ${selectorName} when less than upper boundary`, () => {
    const testState = {
      ...appState,
      screen: { height: 100, width: upper }
    };
    expect(selector(testState)).toBe(false);
  });

  it(`should ${selectorName} when greater than upper boundary`, () => {
    const testState = {
      ...appState,
      screen: { height: 100, width: upper + 1 }
    };
    expect(selector(testState)).toBe(true);
  });
};

describe('count reducer', () => {
  describe('actions', () => {
    describe('screenResize', () => {
      it('should handle decrease', () => {
        const newState = screenReducer(state, actions.screenResize(600, 500));
        expect(newState.width).toBe(600);
        expect(newState.height).toBe(500);
      });
    });
  });

  describe('selectors', () => {
    it('should selectState', () => {
      expect(selectors.selectState(appState)).toBe(state);
    });

    it('should selectWidth', () => {
      expect(selectors.selectWidth(appState)).toBe(100);
    });

    it('should selectHeight', () => {
      expect(selectors.selectHeight(appState)).toBe(300);
    });

    testIsSize('selectIsXs', selectors.selectIsXs, undefined, SIZES.SM - 1);
    testIsSize('selectIsSm', selectors.selectIsSm, SIZES.SM, SIZES.MD - 1);
    testIsSize('selectIsMd', selectors.selectIsMd, SIZES.MD, SIZES.LG - 1);
    testIsSize('selectIsLg', selectors.selectIsLg, SIZES.LG, SIZES.XL - 1);
    testIsSize('selectIsXl', selectors.selectIsXl, SIZES.XL);

    testIsGt('selectIsGtXs', selectors.selectIsGtXs, SIZES.SM - 1);
    testIsGt('selectIsGtSm', selectors.selectIsGtSm, SIZES.MD - 1);
    testIsGt('selectIsGtMd', selectors.selectIsGtMd, SIZES.LG - 1);
    testIsGt('selectIsGtLg', selectors.selectIsGtLg, SIZES.XL - 1);
  });

  it('should selectScreenData', () => {
    const screenData = selectors.selectScreenData(appState);
    expect(screenData.width).toBe(100);
    expect(screenData.height).toBe(300);

    expect(screenData.xs).toBe(true);
    expect(screenData.sm).toBe(false);
    expect(screenData.md).toBe(false);
    expect(screenData.lg).toBe(false);
    expect(screenData.xl).toBe(false);

    expect(screenData.gtXs).toBe(false);
    expect(screenData.gtSm).toBe(false);
    expect(screenData.gtMd).toBe(false);
    expect(screenData.gtLg).toBe(false);
  });
});
