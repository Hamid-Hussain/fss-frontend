import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { customAxios } from "../../services/auth-header";

export const getAllInvoices = createAsyncThunk(
  "ManagePayments/getAllInvoices",
  async () => {
    console.log("loginasync");

    const response = await customAxios.get(
      `${process.env.REACT_APP_BASE_URL}invoice/`
    );
    console.log(response);
    return response.data;
  }
);

export const updatePaymentStatus = createAsyncThunk(
  "ManagePayments/updatePaymentStatus",
  async (payload) => {
    console.log("loginasync", payload);

    const response = await customAxios.post(
      `${process.env.REACT_APP_BASE_URL}invoice/update`,
      { invoice_id: payload.invoice_id, payment_status: payload.payment_status }
    );
    console.log(response);
    return response.data;
  }
);

const initialState = {
  invoices: [],
  //   loginResponse: false,
  //   token: "",
  //   updateUserResponse: false,
};

const ManagePaymentSlice = createSlice({
  name: "ManagePayments",
  initialState,
  reducers: {
    loggedIn: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: {
    [getAllInvoices.pending]: () => {
      console.log("Pending");
    },
    [getAllInvoices.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully", payload);

      return {
        ...state,
        invoices: payload,
      };
    },
    [getAllInvoices.rejected]: () => {
      console.log("Rejected");
    },

    [updatePaymentStatus.pending]: () => {
      console.log("Pending");
    },
    [updatePaymentStatus.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully", payload);

      // return {
      //   ...state,
      //   invoices: payload,
      // };
    },
    [updatePaymentStatus.rejected]: () => {
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
export default ManagePaymentSlice.reducer;
