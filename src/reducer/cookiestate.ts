// listSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  appcookie: string;
}

const initialState: ListState = {
    appcookie: ''
};

const coockiready = createSlice({
  name: 'item3',
  initialState,
  reducers: {
    setapptokenck(state, action: PayloadAction<string>) {
      state.appcookie = action.payload;
    },
  },
});

export const { setapptokenck } = coockiready.actions;
export default coockiready.reducer;
