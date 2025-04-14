import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {
    let init = {
        token: window.localStorage.getItem("token"),
        expires_at: window.localStorage.getItem("expires_at"),
        status: null,
        // recover_email: null
    }

    if (init.token && new Date(init.expires_at) < new Date()) {
        init.token = null;
        init.expires_at = null;

        window.localStorage.removeItem("token");
        window.localStorage.removeItem("expires_at");
    }

    return init;
});

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
        },
        setStatus: (state, action) => {
            state.status = action.payload.status;
            // state.recover_email = action.payload.email;
        }
    }
});

const { actions, reducer } = authSlice;
export const { setCredentials, removeCredentials, setStatus } = actions;
export default reducer;

