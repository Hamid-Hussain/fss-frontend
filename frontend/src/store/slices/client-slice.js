import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { customAxios } from "../../services/auth-header";

export const getAllClients = createAsyncThunk(
  "Clients/getAllClients",
  async () => {
    console.log("loginasync");

    const response = await customAxios.get(
      `${process.env.REACT_APP_BASE_URL}user/`
    );
    console.log(response);
    return response.data;
  }
);

const initialState = {
  users: [],
  //   loginResponse: false,
  //   token: "",
  //   updateUserResponse: false,
};

const clientsSlice = createSlice({
  name: "Clients",
  initialState,
  reducers: {
    loggedIn: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: {
    [getAllClients.pending]: () => {
      console.log("Pending");
    },
    [getAllClients.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully", payload);

      return {
        ...state,
        users: payload,
      };
    },
    [getAllClients.rejected]: () => {
      console.log("Rejected");
    },

    // [updateUser.pending]: () => {
    //   console.log("Pending");
    // },
    // [updateUser.fulfilled]: (state, { payload }) => {
    //   console.log("Fetched Successfully", payload);

    //   return { ...state, updateUserResponse: true };
    // },
    // [updateUser.rejected]: () => {
    //   console.log("Rejected");
    //   return { updateUserResponse: false };
    // },
  },
});

// export const getLoginResponse = (state) => state.loginResponse;
export const getLogedInUser = (state) => state.user;
export default clientsSlice.reducer;
