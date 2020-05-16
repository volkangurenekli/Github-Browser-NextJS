import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function userReposReducer(
  state = initialState.userRepos,
  action
) {
  switch (action.type) {
    case actionTypes.USER_REPOS:
      return action.payload
    default:
      return state
  }
}
