import { createSelector } from 'reselect';

import { AppState } from 'ducks';

export const selectState = (state: AppState) => state.count;
export const selectTotal = createSelector([selectState], state => state.total);
