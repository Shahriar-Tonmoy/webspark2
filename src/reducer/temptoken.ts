// listSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  temptoken: string;
}

const initialState: ListState = {
    temptoken: ''
};

const temptokens = createSlice({
  name: 'item5',
  initialState,
  reducers: {
    settemptoken(state, action: PayloadAction<string>) {
      state.temptoken = action.payload;
    },
  },
});

export const { settemptoken } = temptokens.actions;
export default temptokens.reducer;
