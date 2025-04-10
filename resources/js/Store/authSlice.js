import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    user: null,
    expires_at: null
  };

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.expires_at = action.payload.expires_at;
            window.sessionStorage.setItem("token", action.payload.token);
            window.sessionStorage.setItem("expires_at", action.payload.expires_at);
        },
        removeCredentials: (state) => {
            state.user = null;
            state.token = null;
            window.sessionStorage.removeItem("token");
            window.sessionStorage.removeItem("expires_at");
        }
    }
});

const { actions, reducer } = authSlice;
export const { setCredentials, removeCredentials } = actions;
export default reducer;
