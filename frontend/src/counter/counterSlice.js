import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {

      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    multiply:(state)=>{
        state.value  *=2
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,multiply } = counterSlice.actions

export default counterSlice.reducer