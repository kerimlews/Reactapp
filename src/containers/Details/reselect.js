import { createSelector } from 'reselect';

const details = state => state.detailReducer

export const makeSelectDetails = () => createSelector(
    details,
    state => state
)
