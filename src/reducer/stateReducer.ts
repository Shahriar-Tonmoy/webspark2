// listSlice.ts

import { AppState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  apstate: AppState;
}

const initialState: ListState = {
  apstate: AppState.INITIAL
};

const appstateini = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setAppState(state, action: PayloadAction<AppState>) {
      state.apstate = action.payload;
    },
  },
});

export const { setAppState } = appstateini.actions;
export default appstateini.reducer;
