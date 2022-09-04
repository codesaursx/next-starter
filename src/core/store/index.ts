import { configureStore } from '@reduxjs/toolkit';

import exampleSlice from '@slices/example.slice';

const store = configureStore({
  reducer: {
    example: exampleSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
