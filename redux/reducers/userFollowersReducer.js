import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function userFollowersReducer(
  state = initialState.userFollowers,
  action
) {
  switch (action.type) {
    case actionTypes.USER_FOLLOWERS:
      return action.payload
    default:
      return state
  }
}
