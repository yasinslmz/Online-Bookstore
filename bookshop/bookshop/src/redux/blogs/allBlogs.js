import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const allBlogs = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state,action) => {
      
      state.value =action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBlogs } = allBlogs.actions

export default allBlogs.reducer