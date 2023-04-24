import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import config from "../../../config";
var axios = require("axios");

export const signupUser = createAsyncThunk(
  "authentication/signupUser",
  async ({ fullname, email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        "http://localhost/LTW_BE-SignUp_API/Controllers/SignupController.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            email,
            password,
          }),
        }
      );

      let data = await response.json();
      if (response.status === 201) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "authentication/login",
  async ({ phonenumber, password }, thunkAPI) => {
    console.log("data", phonenumber, password);
    axios
      .post(
        "http://localhost/LTW_BE-SignUp_API/Controllers/LoginController.php",
        {
          phone_number: phonenumber,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("đúng", res);
      })
      .catch((err) => {
        console.log("sai", err);
      });
  }
);

const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.message = "";
      return state;
    },
  },

  extraReducers: {
    // [signupUser.pending]: (state) => {
    //   state.isFetching = true;
    // },

    // [signupUser.fulfilled]: (state, action) => {
    //   state.isFetching = false;
    //   state.isSuccess = true;
    //   state.message = action.payload.message;
    // },

    // [signupUser.rejected]: (state, action) => {
    //   state.isFetching = false;
    //   state.isError = true;
    //   state.message = action.payload.message;
    // },

    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },

    [loginUser.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
    },

    [loginUser.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.message = action.payload.message;
    },
  },
});

export const { clearState } = authenticationSlice.actions;

export const authenticationSelector = (state) => state.authentication;
