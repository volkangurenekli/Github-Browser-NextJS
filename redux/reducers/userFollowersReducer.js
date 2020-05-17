import { createReducer } from '@reduxjs/toolkit'

const userFollowersReducer = createReducer(
  { userFollowers: [] },
  {
    USER_FOLLOWERS: (state, action) => action.payload,
  }
)

export default userFollowersReducer
