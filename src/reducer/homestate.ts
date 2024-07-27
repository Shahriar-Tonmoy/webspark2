// listSlice.ts

import { Homeselector } from '@/functions/enums/homeselector';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  homestate: Homeselector;
}

const initialState: ListState = {
    homestate: Homeselector.HOME
};

const homestateini = createSlice({
  name: 'item6',
  initialState,
  reducers: {
    setHomeState(state, action: PayloadAction<Homeselector>) {
      state.homestate = action.payload;
    },
  },
});

export const { setHomeState } = homestateini.actions;
export default homestateini.reducer;
