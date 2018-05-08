import { createSelector } from 'reselect';

import { State } from './reducers';

const selectState = (state): State => state.routing;

export const selectPathname = createSelector(
  [selectState],
  state =>
    state &&
    state.locationBeforeTransitions &&
    state.locationBeforeTransitions.pathname
);
