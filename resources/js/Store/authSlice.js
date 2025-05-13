import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {

    let init = {
        token: null,
        expires_at: null,
        status: null,
        must_verified_email: true,
        verified: false,
        user: null
    }
    const session = JSON.parse(window.localStorage.getItem('session')) ?? init;

    if (session && new Date(session.expires_at) < new Date()) {
        window.localStorage.removeItem('session');

        return init;
    }

    return session;
});

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setSession: (state, action) => {

            const session = action.payload;

            state.token = session.token;
            state.expires_at = session.expires_at;
            state.user = {name: session.user.name, email: session.user.email};
            state.must_verified_email = session.must_verified_email;
            state.verified = session.verified;

            window.localStorage.setItem('session', JSON.stringify(session));
        },
        removeSession: (state) => {
            Object.keys(state).forEach(key => { state[key] = null; });
            window.localStorage.removeItem('session');
        },
        setStatus: (state, action) => {
            state.status = action.payload.status;
        },
        setVerified: (state, action) => {
            state.verified = action.payload;

            const session = JSON.parse(window.localStorage.getItem('session'));
            session.verified = action.payload;

            window.localStorage.setItem("session", JSON.stringify(session));
        }
    }
});

const { actions, reducer } = authSlice;
export const { setSession, removeSession, setStatus, setVerified } = actions;
export default reducer;

