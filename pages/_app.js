import React from 'react'
import '../css/tailwind.css'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from '../redux/reducers'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(thunk),
})

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
