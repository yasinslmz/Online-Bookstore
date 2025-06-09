import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const allBooksSlice = createSlice({
  name: 'allBooks',
  initialState,
  reducers: {
    getBooks: (state,action) => {
      
      state.value =action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { getBooks } = allBooksSlice.actions

export default allBooksSlice.reducer