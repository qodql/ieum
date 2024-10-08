import { configureStore } from '@reduxjs/toolkit';
import bookSlice from '../api/books';

const store = configureStore({
  reducer: {
    books: bookSlice,
  },
});

export default store;