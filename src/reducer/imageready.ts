// listSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  apstate: boolean;
}

const initialState: ListState = {
  apstate: false
};

const imready = createSlice({
  name: 'item2',
  initialState,
  reducers: {
    setimreadtState(state, action: PayloadAction<boolean>) {
      state.apstate = action.payload;
    },
  },
});

export const { setimreadtState } = imready.actions;
export default imready.reducer;
