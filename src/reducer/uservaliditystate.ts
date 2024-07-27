// listSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  uservalid: boolean;
}

const initialState: ListState = {
    uservalid: false
};

const uservalidation = createSlice({
  name: 'item4',
  initialState,
  reducers: {
    setuservalid(state, action: PayloadAction<boolean>) {
      state.uservalid = action.payload;
    },
  },
});

export const { setuservalid } = uservalidation.actions;
export default uservalidation.reducer;
