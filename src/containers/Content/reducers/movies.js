import {
    FETCH_MOVIES,
    FETCH_MOVIES_FAIL,
    FETCH_MOVIES_SUCCESS,
    SEARCH_MOVIES,
    SEARCH_MOVIES_FAIL,
    SEARCH_MOVIES_SUCCESS
} from '../constants/movies';

const initialState = {
    isLoading: false,
    error: null,
    movies: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movies: action.movies
            }
        case FETCH_MOVIES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case SEARCH_MOVIES:
            return {
                ...state,
                isLoading: true
            }
        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movies: action.movies
            }
        case SEARCH_MOVIES_FAIL:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        default: return state;
    }
}