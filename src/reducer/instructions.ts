

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
    updateInstruction: string;
}

const initialState: ListState = {
    updateInstruction: ''
};

const coockiready = createSlice({
  name: 'item10',
  initialState,
  reducers: {
    setUpdateInstructionstate(state, action: PayloadAction<string>) {
      state.updateInstruction = action.payload;
    },
  },
});

export const { setUpdateInstructionstate } = coockiready.actions;
export default coockiready.reducer;
