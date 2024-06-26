import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../apis/productSlice";

const store = configureStore({
  reducer: {
    productData: productSlice,
  },
});

export default store;
