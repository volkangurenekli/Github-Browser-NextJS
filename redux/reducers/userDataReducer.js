import { createReducer } from '@reduxjs/toolkit'

const userDataReducer = createReducer(
  { userData: {} },
  {
    USER_DATA: (state, action) => action.payload,
  }
)

export default userDataReducer
