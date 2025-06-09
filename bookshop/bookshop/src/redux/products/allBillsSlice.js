import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const allBillsSlice = createSlice({
  name: 'allBills',
  initialState,
  reducers: {
    setBills: (state,action) => {
      
      state.value =action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBills } = allBillsSlice.actions

export default allBillsSlice.reducer