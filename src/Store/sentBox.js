import { createSlice } from '@reduxjs/toolkit'

const initialSentBoxState = {
  sentBox: []
}

const sentBoxSlice = createSlice({
  name: 'sentBox',
  initialState: initialSentBoxState,
  reducers: {
    addToSentBox: (state, action) => {
      state.sentBox = action.payload
      console.log(state.sentBox)
    }
  }
})

export default sentBoxSlice
