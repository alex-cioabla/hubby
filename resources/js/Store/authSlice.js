import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    user: null,
    expiresAt: null
  };

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("expiresAt", action.payload.expiresAt);
        },
        removeCredentials: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
            localStorage.removeItem("expiresAt");
        }
    }
});

const { actions, reducer } = authSlice;
export const { setCredentials, removeCredentials } = actions;
export default reducer;
