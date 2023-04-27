import { configureStore } from "@reduxjs/toolkit";
// import { passwordSlice } from "./features/passwordSlice";
import { userSlice } from "./features/userSlice";
// import { chatSlice } from "./features/chatSlice";
// import { allUsersSlice } from "./features/allUsersSlice";
import { authenticationSlice } from "./features/authenticationSlice";
import { productsSlice } from "./features/productsSlice";
import { shoppingCartSlice } from "./features/shoppingCartSlice";
import { favoriteSlice } from "./features/FavoriteSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    products: productsSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
    favorite: favoriteSlice.reducer,

    // authentication: authenticationSlice.reducer,
  },
});

export default store;
