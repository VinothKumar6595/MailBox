import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = {
  isSignedUp: false,
  isLoggedIn: false,
  endpoint: null,
  token: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    signUp: (state) => {
      state.isSignedUp = !state.isSignedUp;
    },
    endpoint: (state, action) => {
      state.endpoint = localStorage.setItem("endpoint", action.payload);
      state.endpoint = localStorage.getItem("endpoint");
    },
    login: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
      state.token = action.payload;
      localStorage.setItem("token", state.token);
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      localStorage.clear("");
      state.token = null;
      state.isSignedUp = false;
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export const authActions = authSlice.actions;

export default store;
