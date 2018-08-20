import { action } from 'typesafe-actions';

import constants from './constants';

export const screenResize = (width: number, height: number) =>
  action(constants.SCREEN_RESIZE, {
    width,
    height
  });
