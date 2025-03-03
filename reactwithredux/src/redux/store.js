import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import productsSlice from './slices/productsSlice';
import themeReducer from './slices/themeSlice';
import todoSlice from './slices/todoSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    products: productsSlice,
    todo: todoSlice,
  }
})

export default store;