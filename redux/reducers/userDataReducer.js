import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function userDataReducer(state = initialState.userData, action) {
  switch (action.type) {
    case actionTypes.USER_DATA:
      return action.payload
    default:
      return state
  }
}
