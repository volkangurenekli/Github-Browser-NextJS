import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function selectedUserReducer(state = initialState.user, action) {
  switch (action.type) {
    case actionTypes.SELECTED_USER:
      return action.payload;
    default:
      return state;
  }
}
