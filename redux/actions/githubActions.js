import * as actionTypes from './actionTypes'
import axios from 'axios'
import { SEARCH_ENDPOINT, USER_DATA_ENDPOINT } from '../../constants'

export const getUsers = (query) => {
  return async function (dispatch) {
    await axios
      .get(`${SEARCH_ENDPOINT}${query}`)
      .then((data) =>
        dispatch({ type: actionTypes.GET_USERS, payload: data.data.items })
      )
      .catch((err) => {
        console.log(err)
        return null
      })
  }
}

export const getUserData = (query) => {
  return async function (dispatch) {
    await axios
      .get(`${USER_DATA_ENDPOINT}${query}`)
      .then((data) =>
        dispatch({ type: actionTypes.USER_DATA, payload: data.data })
      )
      .catch((err) => {
        console.log(err)
        return null
      })
  }
}

export const getUserFollowing = (query) => {
  return async function (dispatch) {
    await axios
      .get(`${USER_DATA_ENDPOINT}${query}/following`)
      .then((data) =>
        dispatch({ type: actionTypes.USER_FOLLOWING, payload: data.data })
      )
      .catch((err) => {
        console.log(err)
        return null
      })
  }
}

export const getUserFollowers = (query) => {
  return async function (dispatch) {
    await axios
      .get(`${USER_DATA_ENDPOINT}${query}/followers`)
      .then((data) =>
        dispatch({ type: actionTypes.USER_FOLLOWERS, payload: data.data })
      )
      .catch((err) => {
        console.log(err)
        return null
      })
  }
}

export const getUserRepos = (query) => {
  return async function (dispatch) {
    await axios
      .get(`${USER_DATA_ENDPOINT}${query}/repos`)
      .then((data) =>
        dispatch({ type: actionTypes.USER_REPOS, payload: data.data })
      )
      .catch((err) => {
        console.log(err)
        return null
      })
  }
}
