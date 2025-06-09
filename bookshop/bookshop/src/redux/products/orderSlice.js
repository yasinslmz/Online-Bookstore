import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrders: (state,action) => {
      
      state.value =action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setOrders } = orderSlice.actions

export default orderSlice.reducer