import {
    FETCH_MOVIES,
    FETCH_MOVIES_FAIL,
    FETCH_MOVIES_SUCCESS,
    SEARCH_MOVIES,
    SEARCH_MOVIES_FAIL,
    SEARCH_MOVIES_SUCCESS
  } from '../constants/movies';
  
  export function fetchMovies() {
    return {
      type: FETCH_MOVIES
    };
  }
  
  export function fetchMoviesSuccess(movies) {
    return {
      type: FETCH_MOVIES_SUCCESS,
      movies
    };
  }
  
  export function fetchMoviesFail(error) {
    return {
      type: FETCH_MOVIES_FAIL,
      error
    };
  }
  
  export function searchMovies(search) {
    return {
      type: SEARCH_MOVIES,
      search
    };
  }
  
  export function searchMoviesSuccess(movies) {
    return {
      type: SEARCH_MOVIES_SUCCESS,
      movies
    };
  }
  
  export function searchMoviesFail(error) {
    return {
      type: SEARCH_MOVIES_FAIL,
      error
    };
  }