import { combineReducers } from 'redux'
import getUsersReducer from './getUsersReducer'
import userReposReducer from './userReposReducer'
import userDataReducer from './userDataReducer'
import userFollowersReducer from './userFollowersReducer'
import userFollowingReducer from './userFollowingReducer'

const rootReducer = combineReducers({
  getUsersReducer,
  userReposReducer,
  userDataReducer,
  userFollowersReducer,
  userFollowingReducer,
})

export default rootReducer
