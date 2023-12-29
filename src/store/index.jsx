import { configureStore } from "@reduxjs/toolkit";
import uislice from "./ui_slice";
import cartSlice from "./cart_slice";
const store = configureStore({
  reducer: { ui: uislice.reducer, cart: cartSlice.reducer },
});
export default store;
