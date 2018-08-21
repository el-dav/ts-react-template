import { createSelector } from 'reselect';

import { AppState } from 'ducks';

import { SIZES } from './config';

export const selectState = (state: AppState) => state.screen;

export const selectWidth = createSelector([selectState], state => state.width);
export const selectHeight = createSelector(
  [selectState],
  state => state.height
);

export const selectIsXs = createSelector(
  [selectWidth],
  width => width < SIZES.SM
);
export const selectIsGtXs = createSelector(
  [selectWidth],
  width => width >= SIZES.SM
);
export const selectIsSm = createSelector(
  [selectWidth],
  width => width >= SIZES.SM && width < SIZES.MD
);
export const selectIsGtSm = createSelector(
  [selectWidth],
  width => width >= SIZES.MD
);
export const selectIsMd = createSelector(
  [selectWidth],
  width => width >= SIZES.MD && width < SIZES.LG
);
export const selectIsGtMd = createSelector(
  [selectWidth],
  width => width >= SIZES.LG
);
export const selectIsLg = createSelector(
  [selectWidth],
  width => width >= SIZES.LG && width < SIZES.XL
);
export const selectIsGtLg = createSelector(
  [selectWidth],
  width => width >= SIZES.XL
);
export const selectIsXl = createSelector(
  [selectWidth],
  width => width >= SIZES.XL
);

export const selectScreenData = createSelector(
  [
    selectWidth,
    selectHeight,
    selectIsXs,
    selectIsGtXs,
    selectIsSm,
    selectIsGtSm,
    selectIsMd,
    selectIsGtMd,
    selectIsLg,
    selectIsGtLg,
    selectIsXl
  ],
  (width, height, xs, gtXs, sm, gtSm, md, gtMd, lg, gtLg, xl) => ({
    width,
    height,
    xs,
    gtXs,
    sm,
    gtSm,
    md,
    gtMd,
    lg,
    gtLg,
    xl
  })
);
