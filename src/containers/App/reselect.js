import { createSelector } from 'reselect';

const appState = state => state.appReducer

export const appSelector = () => createSelector(
    appState,
    state => state
)
