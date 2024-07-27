// listSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type errorobjtype = {error: boolean; message: string};

interface ListState {
  errorobj: errorobjtype
}

const initialState: ListState = {
    errorobj: {error: false, message: ''}
};

const coockiready = createSlice({
  name: 'item3',
  initialState,
  reducers: {
    setErrorobj(state, action: PayloadAction<errorobjtype>) {
      state.errorobj = action.payload;
    },
  },
});

export const { setErrorobj } = coockiready.actions;
export default coockiready.reducer;
