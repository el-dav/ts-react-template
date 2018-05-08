/*
import * as duck from './screen';

const reducer = duck.default;

const SM = 600;
const MD = 960;
const LG = 1280;
const XL = 1920;

const initialSizes = {
  xs: false,
  gtXs: false,
  sm: false,
  gtSm: false,
  md: false,
  gtMd: false,
  lg: false,
  gtLg: false,
  xl: false,
  width: 0,
  height: 0,
};

describe('screen duck', () => {
  const initialState = reducer(undefined, {});

  it('should exist', () => {
    expect(reducer).toBeDefined();
  });
  it('should return the initialState', () => {
    const keys = Object.keys(initialSizes);
    keys.forEach((key) => {
      expect(initialState[key]).toBeDefined();
    });
  });

  describe('ACTIONS', () => {
    describe('SCREEN_RESIZE', () => {
      const height = 100;
      const action = duck.screenResize(100, 100);

      it('should exist', () => {
        expect(duck.screenResize).toBeDefined();
      });
      it('should generate the correct action', () => {
        const expectedAction = {
          type: duck.SCREEN_RESIZE,
          width: 100,
          height: 100,
        };
        expect(action).toEqual(expectedAction);
      });
      it('should be handled by the reducer', () => {
        const newState = reducer(initialState, action);
        expect(newState.width).toBe(100);
        expect(newState.height).toBe(100);
      });
      it('should correctly handle XS boundaries', () => {
        const checkFields = (newState) => {
          expect(newState.xs).toBe(true);
          expect(newState.gtXs).toBe(false);
          expect(newState.sm).toBe(false);
          expect(newState.gtSm).toBe(false);
          expect(newState.md).toBe(false);
          expect(newState.gtMd).toBe(false);
          expect(newState.lg).toBe(false);
          expect(newState.gtLg).toBe(false);
          expect(newState.xl).toBe(false);
        };
        const actionUpper = duck.screenResize(SM - 1, height);
        const newStateUpper = reducer(initialState, actionUpper);
        checkFields(newStateUpper);
      });
      it('should correctly handle SM boundaries', () => {
        const checkFields = (newState) => {
          expect(newState.xs).toBe(false);
          expect(newState.gtXs).toBe(true);
          expect(newState.sm).toBe(true);
          expect(newState.gtSm).toBe(false);
          expect(newState.md).toBe(false);
          expect(newState.gtMd).toBe(false);
          expect(newState.lg).toBe(false);
          expect(newState.gtLg).toBe(false);
          expect(newState.xl).toBe(false);
        };

        const actionLower = duck.screenResize(SM, height);
        const newStateLower = reducer(initialState, actionLower);
        checkFields(newStateLower);

        const actionUpper = duck.screenResize(MD - 1, height);
        const newStateUpper = reducer(initialState, actionUpper);
        checkFields(newStateUpper);
      });
      it('should correctly handle MD boundaries', () => {
        const checkFields = (newState) => {
          expect(newState.xs).toBe(false);
          expect(newState.gtXs).toBe(true);
          expect(newState.sm).toBe(false);
          expect(newState.gtSm).toBe(true);
          expect(newState.md).toBe(true);
          expect(newState.gtMd).toBe(false);
          expect(newState.lg).toBe(false);
          expect(newState.gtLg).toBe(false);
          expect(newState.xl).toBe(false);
        };

        const actionLower = duck.screenResize(MD, height);
        const newStateLower = reducer(initialState, actionLower);
        checkFields(newStateLower);

        const actionUpper = duck.screenResize(LG - 1, height);
        const newStateUpper = reducer(initialState, actionUpper);
        checkFields(newStateUpper);
      });
      it('should correctly handle LG boundaries', () => {
        const checkFields = (newState) => {
          expect(newState.xs).toBe(false);
          expect(newState.gtXs).toBe(true);
          expect(newState.sm).toBe(false);
          expect(newState.gtSm).toBe(true);
          expect(newState.md).toBe(false);
          expect(newState.gtMd).toBe(true);
          expect(newState.lg).toBe(true);
          expect(newState.gtLg).toBe(false);
          expect(newState.xl).toBe(false);
        };

        const actionLower = duck.screenResize(LG, height);
        const newStateLower = reducer(initialState, actionLower);
        checkFields(newStateLower);

        const actionUpper = duck.screenResize(XL - 1, height);
        const newStateUpper = reducer(initialState, actionUpper);
        checkFields(newStateUpper);
      });
      it('should correctly handle XL boundaries', () => {
        const checkFields = (newState) => {
          expect(newState.xs).toBe(false);
          expect(newState.gtXs).toBe(true);
          expect(newState.sm).toBe(false);
          expect(newState.gtSm).toBe(true);
          expect(newState.md).toBe(false);
          expect(newState.gtMd).toBe(true);
          expect(newState.lg).toBe(false);
          expect(newState.gtLg).toBe(true);
          expect(newState.xl).toBe(true);
        };

        const actionLower = duck.screenResize(XL, height);
        const newStateLower = reducer(initialState, actionLower);
        checkFields(newStateLower);
      });
    });
  });

  describe('SELECTORS', () => {
    const state = {
      screen: {
        ...initialSizes,
        width: 100,
        height: 100,
        xs: true,
      },
    };

    const checkSelector = (selector, name, expectation) => {
      it('should exist', () => {
        expect(selector).toBeDefined();
      });
      it(`should select ${name}`, () => {
        expect(selector(state)).toBe(expectation);
      });
    };

    describe('selectIsXs', () => {
      const selector = duck.selectIsXs;
      checkSelector(selector, 'xs', true);
    });
    describe('selectIsSm', () => {
      const selector = duck.selectIsSm;
      checkSelector(selector, 'sm', false);
    });
    describe('selectIsMd', () => {
      const selector = duck.selectIsMd;
      checkSelector(selector, 'md', false);
    });
    describe('selectIsLg', () => {
      const selector = duck.selectIsLg;
      checkSelector(selector, 'lg', false);
    });
    describe('selectIsXl', () => {
      const selector = duck.selectIsXl;
      checkSelector(selector, 'xl', false);
    });

    describe('selectIsGtXs', () => {
      const selector = duck.selectIsGtXs;
      checkSelector(selector, 'gtXs', false);
    });
    describe('selectIsGtSm', () => {
      const selector = duck.selectIsGtSm;
      checkSelector(selector, 'gtSm', false);
    });
    describe('selectIsGtMd', () => {
      const selector = duck.selectIsGtMd;
      checkSelector(selector, 'gtMd', false);
    });
    describe('selectIsGtLg', () => {
      const selector = duck.selectIsGtLg;
      checkSelector(selector, 'gtLg', false);
    });

    describe('width', () => {
      const selector = duck.selectWidth;
      checkSelector(selector, 'width', 100);
    });
    describe('height', () => {
      const selector = duck.selectHeight;
      checkSelector(selector, 'height', 100);
    });
  });
});
*/
