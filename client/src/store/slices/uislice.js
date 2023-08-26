import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  monthData: [],
  isDarkMode:
    localStorage.getItem("isDarkMode") != undefined
      ? JSON.parse(localStorage.getItem("isDarkMode"))
      : false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMonthData: (state, { payload }) => {
      state.monthData = payload.data;
    },
    addNewMessage: (state, { payload }) => {
      state.messages.push({ id: payload.id, message: payload.message });
    },
    removeMessage: (state, { payload }) => {
      state.messages = state.messages.filter((item) => payload.id != item.id);
    },
    toggleMode: (state, { payload }) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", state.isDarkMode);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewMessage, removeMessage, setMonthData } = uiSlice.actions;

export const { toggleMode } = uiSlice.actions;

export default uiSlice.reducer;
