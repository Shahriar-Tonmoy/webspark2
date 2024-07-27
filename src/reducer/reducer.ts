// reducers.ts

import { combineReducers } from '@reduxjs/toolkit';
import listReducer from './listReducer';
import stateReducer from './stateReducer';
import imageready from './imageready';
import cookiestate from './cookiestate';
import uservaliditystate from './uservaliditystate';
import temptoken from './temptoken';
import homestate from './homestate';
import zerobalancestate from './zerobalancestate';
import resetvoice from './resetvoice';
import mikeoff from './mikeoff';
import instructions from './instructions';
import promptstate from './promptstate';

const rootReducer = combineReducers({
  item: listReducer,
  item1: stateReducer,
  item2: imageready,
  item3: cookiestate,
  item4: uservaliditystate,
  item5: temptoken,
  item6: homestate,
  item7: zerobalancestate,
  item8: resetvoice,
  item9: mikeoff,
  item10: instructions,
  item11: promptstate
});

export default rootReducer;
