import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state,action) => {
      
      state.value =action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer