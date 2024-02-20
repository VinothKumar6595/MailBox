import { createSlice } from "@reduxjs/toolkit";

const initialSentBoxState = {
  sentBox: [],
};

const sentBoxSlice = createSlice({
  name: "sentBox",
  initialState: initialSentBoxState,
  reducers: {
    addToSentBox: (state, action) => {
      state.sentBox = action.payload;
      console.log(state.sentBox);
    },
    updateSentBox: (state, action) => {
      console.log(state, action);
      const updatedMails = state.sentBox.map((mail) => {
        console.log(mail);
        // if (mail[0] === action.payload) {
        //   const updatedObj = { ...mail[1], unread: false };
        //   return [mail[0], updatedObj];
        // }
        return [mail[0], { ...mail[1] }];
      });
      console.log(updatedMails);
      state.sentBox = updatedMails;
    },
  },
});

export default sentBoxSlice;
