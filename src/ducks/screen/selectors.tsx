import { createSelector } from 'reselect';

import { AppState } from 'ducks';

const selectState = (state: AppState) => state.screen;

export const selectScreenData = createSelector([selectState], state => state);

export const selectScreenState = state => state.screen;

export const selectIsXs = createSelector([selectState], state => state.xs);
export const selectIsGtXs = createSelector([selectState], state => state.gtXs);
export const selectIsSm = createSelector([selectState], state => state.sm);
export const selectIsGtSm = createSelector([selectState], state => state.gtSm);
export const selectIsMd = createSelector([selectState], state => state.md);
export const selectIsGtMd = createSelector([selectState], state => state.gtMd);
export const selectIsLg = createSelector([selectState], state => state.lg);
export const selectIsGtLg = createSelector([selectState], state => state.gtLg);
export const selectIsXl = createSelector([selectState], state => state.xl);
export const selectWidth = createSelector([selectState], state => state.width);
export const selectHeight = createSelector(
  [selectState],
  state => state.height
);
