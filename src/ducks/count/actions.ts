import { action } from 'typesafe-actions';

import constants from './constants';

export const increase = () => action(constants.INCREASE);

export const decrease = () => action(constants.DECREASE);

export const increaseAsync = () => action(constants.INCREASE_ASYNC);
