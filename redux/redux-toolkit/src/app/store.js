import { configureStore } from '@reduxjs/toolkit';

// Import the todoReducer from "../features/todo/todoSlick"

export const store = configureStore({
  reducer: {
    // Pass in the todoReducer as a reducer in this object.
    // Set the key as "todo" and the value as "todoReducer".
  },
});
