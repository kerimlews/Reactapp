import {
    FETCH_VIDEOS,
    FETCH_VIDEOS_FAIL,
    FETCH_VIDEOS_SUCCESS,
    SHOW_DETAILS
} from './constants';

export function showDetails(typeCard, item) {
    return {
        type: SHOW_DETAILS,
        typeCard,
        item
    }
}

export function fetchVideos(id, typeCard) {
    return {
        type: FETCH_VIDEOS,
        id,
        typeCard: typeCard === 'Movies'
    }
}

export function fetchVideosSuccess(videos) {
    return {
        type: FETCH_VIDEOS_SUCCESS,
        videos
    }
}

export function fetchVideosFail(error) {
    return {
        type: FETCH_VIDEOS_FAIL,
        error
    }
}