import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function userFollowingReducer(
  state = initialState.userFollowing,
  action
) {
  switch (action.type) {
    case actionTypes.USER_FOLLOWING:
      return action.payload
    default:
      return state
  }
}
