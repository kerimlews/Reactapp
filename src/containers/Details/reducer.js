import {
    FETCH_VIDEOS,
    FETCH_VIDEOS_FAIL,
    FETCH_VIDEOS_SUCCESS,
    SHOW_DETAILS
} from './constants';

const initialState = {
    isLoading: false,
    type: '',
    item: {},
    videos: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_DETAILS:
            return {
                ...state,
                type: action.typeCard,
                item: action.item
            }
        
        case FETCH_VIDEOS:
            return {
                ...state,
                isLoading: true
            } 
        case FETCH_VIDEOS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case FETCH_VIDEOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                videos: action.videos
            }
        default:
            return state;
    }
}