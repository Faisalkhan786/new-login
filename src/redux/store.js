import { configureStore } from "@reduxjs/toolkit";
import authRedudcer from "./authSlice";
import registerReducer from "./registerSlice"
import { otpApi } from "./otpApi";

export const store = configureStore({
  reducer: {
    auth: authRedudcer,
    register: registerReducer,
    [otpApi.reducerPath]: otpApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(otpApi.middleware),
})