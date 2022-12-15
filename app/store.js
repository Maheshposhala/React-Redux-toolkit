import { configureStore } from '@reduxjs/toolkit';
import createSlice from '../features/cake/createSlice';
import iceCreamSlice from '../features/icecream/iceCreamSlice';
// const reduxLogger=require('redux-logger')
// const logger=reduxLogger.createLogger()
const store=configureStore({
    reducer: {
        cake: createSlice,
        icecream: iceCreamSlice
       // user: userSlice
    }
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})


export default store