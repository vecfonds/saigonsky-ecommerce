import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
var axios = require("axios");

const initialState = {
  data: [],
};

//   Description: "Mặc mát, thích hợp vào mùa hè",
//   Id: "73fe9634-5c32-4571-a1c6-ca3d7ce5ee4e",
//   Is_active: 1,
//   Name: "Áo dài",
//   Price: "1200000.00000",
//   Quantity: "20",
//   Type: "Áo"

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.message = "";
      state.isUploadSuccess = false;
      return state;
    },
    clearData: (state) => {
      state = { ...initialState };
      return state;
    },
    loadDataProducts: (state, action) => {
      console.log("action.payload", action.payload);

      // const data = action.payload;
      // data.forEach((product, index) => {
      //   axios
      //     .get("http://localhost/LTW_BE-dev/Controllers/GetImages.php", {
      //       productID: product.Id,
      //     })
      //     .then((response) => {
      //       // Handle successful response
      //       const imageData = response.data;

      //       const imageUrl = imageData.map((img) =>
      //         URL.createObjectURL(new Blob(img, { type: "image/jpeg" }))
      //       );

      //       // Use the imageUrl to display the image on the client-side

      //       console.log("imageUrl", imageUrl);
      //       state.data.filter((item) => item.Id === product.Id)[0].images =
      //         imageUrl;
      //     })
      //     .catch((error) => {
      //       // Handle error
      //       console.log(error);
      //     });
      // });
      state.data = action.payload;
      console.log("state", state);
      return state;
    },
    addImageProduct: (state) => {
      // console.log("action.payload", action.payload);

      state.data.forEach((product, index) => {
        axios
          .get("http://localhost/LTW_BE-dev/Controllers/GetImages.php", {
            productID: product.Id,
          })
          .then((response) => {
            // Handle successful response
            const imageData = response.data;

            const imageUrl = imageData.map((img) =>
              URL.createObjectURL(new Blob(img, { type: "image/jpeg" }))
            );

            // Use the imageUrl to display the image on the client-side

            console.log("imageUrl", imageUrl);
            state.data.filter((item) => item.Id === product.Id)[0].images =
              imageUrl;
          })
          .catch((error) => {
            // Handle error
            console.log(error);
          });
      });

      console.log("state", state);
      return state;
    },
  },

  extraReducers: {
    // [editUser.pending]: (state) => {
    //   state.isFetching = true;
    // },
    // [editUser.fulfilled]: (state, action) => {
    //   state.phoneNumber = action.payload.phoneNumber;
    //   state.fullname = action.payload.fullname;
    //   state.birthDay = action.payload.birthDay;
    //   state.isFetching = false;
    //   state.isSuccess = true;
    // },
    // [editUser.rejected]: (state, action) => {
    //   state.isFetching = false;
    //   state.isError = true;
    //   //   state.message = action.payload.message;
    // },
  },
});

export const { clearState, clearData, loadDataProducts, addImageProduct } =
  productsSlice.actions;

export const productsSelector = (state) => state.products;
