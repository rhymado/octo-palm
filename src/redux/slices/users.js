import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUserPlaceholder } from "../../utils/https/placeholder";

const initialState = {
  data: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  err: null,
};

const getUsersThunk = createAsyncThunk("users/get", async (controller) => {
  try {
    const response = await getUserPlaceholder(controller);
    // console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (prevState) => {
      return {
        ...prevState,
        data: [],
      };
    },
  },
  //   extraReducers: {
  //     [getUsersThunk.pending]: (prevState) => {
  //       return {
  //         ...prevState,
  //         isLoading: true,
  //         isRejected: false,
  //         isFulfilled: false,
  //       };
  //     },
  //     [getUsersThunk.fulfilled]: (prevState, action) => {
  //       return {
  //         ...prevState,
  //         isLoading: false,
  //         isFulfilled: true,
  //         data: action.payload,
  //       };
  //     },
  //     [getUsersThunk.rejected]: (prevState, action) => {
  //       return {
  //         ...prevState,
  //         isLoading: false,
  //         isRejected: true,
  //         err: action.payload,
  //       };
  //     },
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (prevState) => {
        return {
          ...prevState,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      })
      .addCase(getUsersThunk.fulfilled, (prevState, action) => {
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          data: action.payload,
        };
      })
      .addCase(getUsersThunk.rejected, (prevState, action) => {
        return {
          ...prevState,
          isLoading: false,
          isRejected: true,
          err: action.payload,
        };
      });
  },
});

export const usersAction = {
  ...userSlice.actions,
  getUsersThunk,
};
export default userSlice.reducer;
