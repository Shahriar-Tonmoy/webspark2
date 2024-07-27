
import { PROMOPTSRESPONSETYPE } from '@/functions/types/socketresponse';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  response: PROMOPTSRESPONSETYPE;
}

const initialState: ListState = {
    response: []
};

const Promptstate = createSlice({
  name: 'item11',
  initialState,
  reducers: {
    setPromptResponse(state, action: PayloadAction<PROMOPTSRESPONSETYPE>) {
      state.response = action.payload;
    },
  },
});

export const { setPromptResponse } = Promptstate.actions;
export default Promptstate.reducer;
