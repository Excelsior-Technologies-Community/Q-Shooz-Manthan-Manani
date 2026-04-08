import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import addToCartReducer from "../Slices/addToCartSlice";
import addToWishReducer from "../Slices/addToWishSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    addToCart: addToCartReducer,
    addToWish: addToWishReducer,
  },
});