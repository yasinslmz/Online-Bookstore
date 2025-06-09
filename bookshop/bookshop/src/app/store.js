import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/products/counterSlice'
import allBooksReducer from '../redux/products/allBooksSlice'
import categoriesReducer from '../redux/products/categoriesSlice'
import cartProductsReducer from '../redux/products/cartBooks'
import orderReducer from '../redux/products/orderSlice'
import allBlogsReducer from '../redux/blogs/allBlogs'
import userLoginSlice from '../redux/user/userLoginSlice'
import allBillsSlice from '../redux/products/allBillsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    allBooks:allBooksReducer,
    categories:categoriesReducer,
    cartBooks:cartProductsReducer,
    order:orderReducer,
    allBlogs:allBlogsReducer,
    user:userLoginSlice,
    allBills:allBillsSlice
  },
})
