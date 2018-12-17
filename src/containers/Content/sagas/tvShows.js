import ajax from '../../../ajax';
import { all, put, takeLatest } from 'redux-saga/effects';

import {
    FETCH_TVSHOWS,
    SEARCH_TVSHOWS
} from '../constants/tvShows';

import {
    fetchTVShowsFail,
    fetchTVShowsSuccess,
    searchTVShowsFail,
    searchTVShowsSuccess
} from '../actions/tvShows';

function* fetchTVShows() {
    try {
        const response = yield ajax.get('/tv/top_rated');
        yield put(fetchTVShowsSuccess(response));
    } catch (ex) {
        yield put(fetchTVShowsFail(ex));
    }
}

function* searchTVShows({ search }) {
    try {
        const response = yield ajax.get('/search/tv', search);
        yield put(searchTVShowsSuccess(response));
    } catch (ex) {
        yield put(searchTVShowsFail(ex));
    }
}

export default function* saga() {
    yield all([
        takeLatest(FETCH_TVSHOWS, fetchTVShows),
        takeLatest(SEARCH_TVSHOWS, searchTVShows)
    ]);
}

