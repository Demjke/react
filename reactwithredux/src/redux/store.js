import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import productsSlice from './slices/productsSlice';
import themeReducer from './slices/themeSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    products: productsSlice,
  }
})

export default store;