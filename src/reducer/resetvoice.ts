// listSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  resetv: boolean;
}

const initialState: ListState = {
    resetv: false
};

const resetvoice = createSlice({
  name: 'item8',
  initialState,
  reducers: {
    setResetvoice(state, action: PayloadAction<boolean>) {
      state.resetv = action.payload;
    },
  },
});

export const { setResetvoice } = resetvoice.actions;
export default resetvoice.reducer;
