import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    user: null,
    tokenExp: null
  };

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("tokenExp", action.payload.tokenExp);
        },
        removeCredentials: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
            localStorage.removeItem("tokenExp");
        }
    }
});

const { actions, reducer } = authSlice;
export const { setCredentials, removeCredentials } = actions;
export default reducer;
