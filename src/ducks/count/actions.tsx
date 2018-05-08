import { INCREASE, DECREASE, INCREASE_ASYNC } from './constants';

export const increase = () => ({
  type: INCREASE
});

export const decrease = () => ({
  type: DECREASE
});

export const increaseAsync = () => ({
  type: INCREASE_ASYNC
});
