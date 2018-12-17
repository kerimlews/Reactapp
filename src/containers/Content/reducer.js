import { combineReducers } from 'redux';

import content from './reducers/content';
import tvShows from './reducers/tvShows';
import movies from './reducers/movies';

export default combineReducers({
    movies,
    content,
    tvShows
})