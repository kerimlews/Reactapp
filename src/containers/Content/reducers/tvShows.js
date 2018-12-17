import {
  FETCH_TVSHOWS,
  FETCH_TVSHOWS_FAIL,
  FETCH_TVSHOWS_SUCCESS,
  SEARCH_TVSHOWS,
  SEARCH_TVSHOWS_FAIL,
  SEARCH_TVSHOWS_SUCCESS
} from '../constants/tvShows';

const initialState = {
  isLoading: false,
  error: null,
  tvShows: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case FETCH_TVSHOWS:
          return {
              ...state,
              isLoading: true
          }
      case FETCH_TVSHOWS_SUCCESS:
          return {
              ...state,
              isLoading: false,
              tvShows: action.tvShows
          }
      case FETCH_TVSHOWS_FAIL:
          return {
              ...state,
              isLoading: false,
              error: action.error
          }
      case SEARCH_TVSHOWS:
          return {
              ...state,
              isLoading: true
          }
      case SEARCH_TVSHOWS_SUCCESS:
          return {
              ...state,
              isLoading: false,
              tvShows: action.tvShows
          }
      case SEARCH_TVSHOWS_FAIL:
          return {
              ...state,
              isLoading: true,
              error: null
          }
      default: return state;
  }
}