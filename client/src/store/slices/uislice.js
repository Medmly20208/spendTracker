import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  isDarkMode: false,
  /*isDarkMode: localStorage.getItem("isDarkMode")
    ? localStorage.getItem("isDarkMode")
    : false,*/
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    addNewMessage: (state, { payload }) => {
      state.messages.push({ id: payload.id, message: payload.message });
    },
    removeMessage: (state, { payload }) => {
      state.messages = state.messages.filter((item) => payload.id != item.id);
    },
    toggleMode: (state, { payload }) => {
      if (payload?.type) {
        state.isDarkMode = payload.type;
        return;
      }
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewMessage, removeMessage } = uiSlice.actions;

export const { toggleMode } = uiSlice.actions;

export default uiSlice.reducer;
