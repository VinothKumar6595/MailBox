import { createSlice } from "@reduxjs/toolkit";

const initialInboxState = {
  inbox: [],
};

const inboxSlice = createSlice({
  name: "inbox",
  initialState: initialInboxState,
  reducers: {
    addToInbox: (state, action) => {
      state.inbox = action.payload;
      console.log(state.inbox);
    },
  },
});

export default inboxSlice;
