import { createReducer } from '@reduxjs/toolkit'

const userReposReducer = createReducer(
  { userRepos: [] },
  {
    USER_REPOS: (state, action) => action.payload,
  }
)

export default userReposReducer
