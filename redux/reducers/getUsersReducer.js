import { createReducer } from '@reduxjs/toolkit'

const getUsersReducer = createReducer(
  { users: [] },
  {
    GET_USERS: (state, action) => action.payload,
  }
)

export default getUsersReducer
