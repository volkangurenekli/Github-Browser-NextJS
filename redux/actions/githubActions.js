import * as actionTypes from "./actionTypes";
import axios from "axios";
import { SEARCH } from "../../constants";

export function getUsersSuccess(users) {
  return { type: actionTypes.GET_USERS, payload: users };
}

export function getUsers(query) {
  return async function (dispatch) {
    await axios
      .get(`${SEARCH}${query}`)
      .then((data) => dispatch(getUsersSuccess(data.data.items)))
      .catch((err) => {
        console.log(err);
        return null;
      });
  };
}

export function selectedUser(user) {
  return { type: actionTypes.SELECTED_USER, payload: user };
}
