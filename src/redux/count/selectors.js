import { createSelector } from "reselect";

const counterSelector = (state) => state.counter;

export const getCount = createSelector([counterSelector], (state) => state.count);