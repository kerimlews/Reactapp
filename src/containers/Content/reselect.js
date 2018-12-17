import { createSelector } from 'reselect';

const content = state => state.contentReducer;

export const makeSelectContent = () => createSelector(
    content,
    state => state.content
);

export const makeSelectMovies = () => createSelector(
    content,
    state => state.movies
);

export const makeSelectTVShow = () => createSelector(
    content,
    state => state.tvShows
);