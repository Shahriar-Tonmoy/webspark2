// listSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface lowbstate {
  lowbalance: boolean;
}

const initialState: lowbstate = {
    lowbalance: false
};

const lowbalancestate = createSlice({
  name: 'item8',
  initialState,
  reducers: {
    setlberror(state, action: PayloadAction<boolean>) {
      state.lowbalance = action.payload;
    },
  },
});

export const { setlberror } = lowbalancestate.actions;
export default lowbalancestate.reducer;
