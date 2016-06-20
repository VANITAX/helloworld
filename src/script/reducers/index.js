import { combineReducers } from 'redux'

import { REQUEST_POSTS } from '../actions/index';
console.log(REQUEST_POSTS);

function fetchData (state = { }, action) {
  switch ( action.type ) {
    case SELECT_REDDIT:
      return action.reddit
    default:
      return state
  }
}