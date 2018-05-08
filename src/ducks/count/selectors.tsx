import { createSelector } from 'reselect';

import { State } from './reducers';

const selectState = (state): State => state.count;

export const selectTotal = createSelector([selectState], state => state.total);
