import {
  FETCH_TVSHOWS,
  FETCH_TVSHOWS_FAIL,
  FETCH_TVSHOWS_SUCCESS,
  SEARCH_TVSHOWS,
  SEARCH_TVSHOWS_FAIL,
  SEARCH_TVSHOWS_SUCCESS
} from '../constants/tvShows'

export function fetchTVShows() {
  return {
    type: FETCH_TVSHOWS
  };
}

export function fetchTVShowsSuccess(tvShows) {
  return {
    type: FETCH_TVSHOWS_SUCCESS,
    tvShows
  };
}

export function fetchTVShowsFail(error) {
  return {
    type: FETCH_TVSHOWS_FAIL,
    error
  };
}

export function searchTVShows(search) {
  return {
    type: SEARCH_TVSHOWS,
    search
  };
}

export function searchTVShowsSuccess(tvShows) {
  return {
    type: SEARCH_TVSHOWS_SUCCESS,
    tvShows
  };
}

export function searchTVShowsFail(error) {
  return {
    type: SEARCH_TVSHOWS_FAIL,
    error
  };
}