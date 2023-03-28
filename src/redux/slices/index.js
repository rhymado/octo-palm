import { combineReducers } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import userSlice from "./users";

const reducers = combineReducers({
  calculator: counterSlice,
  user: userSlice,
});

export default reducers;
