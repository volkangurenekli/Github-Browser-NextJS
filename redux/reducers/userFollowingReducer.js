import { createReducer } from '@reduxjs/toolkit'

const userFollowingReducer = createReducer(
  { userFollowing: [] },
  {
    USER_FOLLOWING: (state, action) => action.payload,
  }
)

export default userFollowingReducer
