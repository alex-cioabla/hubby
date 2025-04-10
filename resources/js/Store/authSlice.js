import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {
    const token = window.localStorage.getItem("token");
    const expires_at = window.localStorage.getItem("expires_at");

    if (token && expires_at && new Date(expires_at) > new Date()) {
        return {
            token: token,
            expires_at: expires_at
        }

    }else{
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("expires_at");

        return {
            token: null,
            expires_at: null
        }
    }
})();

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.token;
            state.expires_at = action.payload.expires_at;

            window.localStorage.setItem("token", action.payload.token);
            window.localStorage.setItem("expires_at", action.payload.expires_at);
        },
        removeCredentials: (state) => {
            state.token = null;
            state.expires_at = null;

            window.localStorage.removeItem("token");
            window.localStorage.removeItem("expires_at");
        }
    }
});

const { actions, reducer } = authSlice;
export const { setCredentials, removeCredentials } = actions;
export default reducer;
