import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {

    const data = JSON.parse(window.localStorage.getItem('data'));
    // let init = {
    //     token: window.localStorage.getItem("token"),
    //     expires_at: window.localStorage.getItem("expires_at"),
    //     must_verified_email: window.localStorage.getItem("must_verified_email"),
    //     verified: window.localStorage.getItem("verified"),
    //     status: null,
    // }

    if (data.token && new Date(data.expires_at) < new Date()) {
        Object.keys(data).forEach(key => { data[key] = null; });

        window.localStorage.clear();
    }

    return data;
});

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setSession: (state, action) => {

            const data = action.payload;

            state.token = data.token;
            state.expires_at = data.expires_at;
            state.user = {name: data.name, email: data.email};
            state.must_verified_email = data.must_verified_email;
            state.verified = data.verified;

            window.localStorage.setItem('data', JSON.stringify(data));
        },
        removeSession: (state) => {
            Object.keys(state).forEach(key => { state[key] = null; });
            window.localStorage.clear();
        },
        setStatus: (state, action) => {
            state.status = action.payload.status;
        },
        setVerified: (state, action) => {
            state.verified = action.payload;
            window.localStorage.setItem("verified", action.payload);
        }
    }
});

const { actions, reducer } = authSlice;
export const { setSession, removeSession, setStatus, setVerified } = actions;
export default reducer;

