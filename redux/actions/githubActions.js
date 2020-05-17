import axios from 'axios'
import { SEARCH_ENDPOINT, USER_DATA_ENDPOINT } from '../../constants'
import { createAction } from '@reduxjs/toolkit'

const getUsersSuccess = createAction('GET_USERS')
const getUserDataSuccess = createAction('USER_DATA')
const getUserFollowingSuccess = createAction('USER_FOLLOWING')
const getUserFollowersSuccess = createAction('USER_FOLLOWERS')
const getUserReposSuccess = createAction('USER_REPOS')

export const getUsers = query => {
  return async function(dispatch) {
    await axios
      .get(`${SEARCH_ENDPOINT}${query}`)
      .then(data => dispatch(getUsersSuccess(data.data.items)))
      .catch(err => {
        console.log(err)
        return null
      })
  }
}

export const getUserData = query => {
  return async function(dispatch) {
    await axios
      .get(`${USER_DATA_ENDPOINT}${query}`)
      .then(data => dispatch(getUserDataSuccess(data.data)))
      .catch(err => {
        console.log(err)
        return null
      })
  }
}

export const getUserFollowing = query => {
  return async function(dispatch) {
    await axios
      .get(`${USER_DATA_ENDPOINT}${query}/following`)
      .then(data => dispatch(getUserFollowingSuccess(data.data)))
      .catch(err => {
        console.log(err)
        return null
      })
  }
}

export const getUserFollowers = query => {
  return async function(dispatch) {
    await axios
      .get(`${USER_DATA_ENDPOINT}${query}/followers`)
      .then(data => dispatch(getUserFollowersSuccess(data.data)))
      .catch(err => {
        console.log(err)
        return null
      })
  }
}

export const getUserRepos = query => {
  return async function(dispatch) {
    await axios
      .get(`${USER_DATA_ENDPOINT}${query}/repos`)
      .then(data => dispatch(getUserReposSuccess(data.data)))
      .catch(err => {
        console.log(err)
        return null
      })
  }
}
