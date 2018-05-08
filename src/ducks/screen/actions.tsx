import { SCREEN_RESIZE } from './constants';

export const screenResize = (width, height) => ({
  type: SCREEN_RESIZE,
  width,
  height
});
