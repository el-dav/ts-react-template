import { SCREEN_RESIZE } from './constants';

const SM = 600;
const MD = 960;
const LG = 1280;
const XL = 1920;

export type State = Readonly<{
  xs: boolean;
  gtXs: boolean;
  sm: boolean;
  gtSm: boolean;
  md: boolean;
  gtMd: boolean;
  lg: boolean;
  gtLg: boolean;
  xl: boolean;
  width: number;
  height: number;
}>;

const initialSizes: State = {
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
  height: 0
};

const getSizes = (width: number, height: number): State => {
  const sizes = { ...initialSizes };

  if (width < SM) {
    sizes.xs = true;
  }
  if (width >= SM) {
    sizes.gtXs = true;
    if (width < MD) {
      sizes.sm = true;
    }
  }
  if (width >= MD) {
    sizes.gtSm = true;
    if (width < LG) {
      sizes.md = true;
    }
  }
  if (width >= LG) {
    sizes.gtMd = true;
    if (width < XL) {
      sizes.lg = true;
    }
  }
  if (width >= XL) {
    sizes.gtLg = true;
    sizes.xl = true;
  }

  sizes.width = width;
  sizes.height = height;

  return sizes;
};

const getInitialState = () =>
  typeof window === 'object'
    ? getSizes(window.innerWidth, window.innerHeight)
    : initialSizes;

const screen = (state = getInitialState(), action): State => {
  switch (action.type) {
    case SCREEN_RESIZE:
      return getSizes(action.width, action.height);
    default:
      return state;
  }
};

export default screen;
