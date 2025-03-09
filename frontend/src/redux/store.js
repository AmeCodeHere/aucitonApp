import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'
import  anotherCounterReducer from '../counter/anotherCounterSlice'


export default configureStore({
    reducer: {
        counter: counterReducer,
        anotherCounter:anotherCounterReducer
    }
})