import ajax from '../../../ajax';
import { all, put, takeLatest } from 'redux-saga/effects';

import {
    FETCH_MOVIES,
    SEARCH_MOVIES
} from '../constants/movies';

import {
    fetchMoviesFail,
    fetchMoviesSuccess,
    searchMoviesFail,
    searchMoviesSuccess
} from '../actions/movies';

function* fetchMovies() {
    try {
        const response = yield ajax.get('/movie/top_rated');
        yield put(fetchMoviesSuccess(response));
    } catch (ex) {
        yield put(fetchMoviesFail(ex));
    }
}

function* searchMovies({ search }) {
    try {
        const response = yield ajax.get('/search/movie', search);
        yield put(searchMoviesSuccess(response));
    } catch (ex) {
        yield put(searchMoviesFail(ex));
    }
}

export default function* saga() {
    yield all([
        takeLatest(FETCH_MOVIES, fetchMovies),
        takeLatest(SEARCH_MOVIES, searchMovies)
    ]);
}

