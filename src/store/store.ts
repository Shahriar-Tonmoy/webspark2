// store.ts

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer/reducer'; // Your combined reducers

const store = configureStore({
  reducer: rootReducer,
  // Add middleware or enhancers if needed
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
