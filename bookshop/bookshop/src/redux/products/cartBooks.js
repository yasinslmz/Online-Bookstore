import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartBooks = createSlice({
  name: 'cartBooks',
  initialState,
  reducers: {
    setCartBooks: (state,action) => {
      
      state.value =action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCartBooks } = cartBooks.actions

export default cartBooks.reducer