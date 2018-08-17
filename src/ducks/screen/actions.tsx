import { SCREEN_RESIZE } from './constants';

export const screenResize = (width: number, height: number) => ({
  type: SCREEN_RESIZE,
  width,
  height
});
