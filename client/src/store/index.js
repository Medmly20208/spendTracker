import { configureStore } from "@reduxjs/toolkit";

import { apiSlice, authSlice } from "../api/apiSlice";
import { messagesSlice } from "./slices/uislice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
    messages: messagesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, authSlice.middleware),
});
