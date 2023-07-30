import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice.js";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
