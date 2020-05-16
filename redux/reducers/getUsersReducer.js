import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function getUsersReducer(state = initialState.users, action) {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return action.payload;
    default:
      return state;
  }
}
