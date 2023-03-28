import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
  name: "",
};

const counterSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    // nama action akan digenerate otomatis
    increment: (prevState) => {
      return {
        ...prevState,
        number: prevState.number + 1,
      };
    },
    decrement: (prevState) => {
      return {
        ...prevState,
        number: prevState.number - 1,
      };
    },
    reset: (prevState) => {
      return {
        ...prevState,
        number: 0,
      };
    },
    submit: (prevState, action) => {
      return {
        ...prevState,
        name: action.payload,
      };
    },
  },
  // nama action custom
  //   extraReducers:
});

export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
