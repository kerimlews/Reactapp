import ajax from '../../ajax';
import { all, put, takeLatest } from 'redux-saga/effects';

import {
    FETCH_VIDEOS
} from './constants';

import {
    fetchVideosFail,
    fetchVideosSuccess
} from './actions';

function* fetchVideos({ id, typeCard }) {
    try {
        const response = yield ajax.get(`/${typeCard ? 'movie' : 'tv'}/${id}/videos`);
        yield put(fetchVideosSuccess(response));
    } catch (ex) {
        yield put(fetchVideosFail(error));
    }
}

export default function* detailSaga() {
    yield takeLatest(FETCH_VIDEOS, fetchVideos)
}

