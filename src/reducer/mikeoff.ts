// listSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
    resetmike: boolean;
}

const initialState: ListState = {
    resetmike: false
};

const mikeoff = createSlice({
  name: 'item9',
  initialState,
  reducers: {
    setMikeoff(state, action: PayloadAction<boolean>) {
      state.resetmike = action.payload;
    },
  },
});

export const { setMikeoff } = mikeoff.actions;
export default mikeoff.reducer;
