import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addNewMessage: (state, { payload }) => {
      state.messages.push({ id: payload.id, message: payload.message });
    },
    removeMessage: (state, { payload }) => {
      state.messages = state.messages.filter((item) => payload.id != item.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewMessage, removeMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
