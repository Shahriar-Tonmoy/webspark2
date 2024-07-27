// listSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  items: string[];
}

const initialState: ListState = {
  items: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setImage(state, action: PayloadAction<string[]>) {
      state.items = action.payload;
    },
  },
});

export const { setImage } = listSlice.actions;
export default listSlice.reducer;
