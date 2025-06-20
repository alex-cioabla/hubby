import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {

    let init = {
        token: null,
        expires_at: null,
        status: null,
        must_verified_email: true,
        user: null,
        remember: false
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
            const storage = session.remember ? window.localStorage : window.sessionStorage;

            state.token = session.token;
            state.expires_at = session.expires_at;
            state.must_verified_email = session.must_verified_email;
            state.user = {...session.user};

            storage.setItem('session', JSON.stringify(session));
        },
        removeSession: (state) => {
            Object.keys(state).forEach(key => { state[key] = null; });
            const storage = state.remember ? window.localStorage : window.sessionStorage;
            storage.removeItem('session');
        },
        updateSession: (state, action) => {
            state.user = action.payload;

            const session = JSON.parse(window.localStorage.getItem('session'));
            const storage = session.remember ? window.localStorage : window.sessionStorage;
            session.user = action.payload;

            storage.setItem("session", JSON.stringify(session));
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setEmailVerifiedAt: (state, action) => {
            state.user.email_verified_at = action.payload;

            const session = JSON.parse(window.localStorage.getItem('session'));
            const storage = session.remember ? window.localStorage : window.sessionStorage;

            session.user.email_verified_at = action.payload;

            storage.setItem("session", JSON.stringify(session));
        }
    }
});

const { actions, reducer } = authSlice;
export const { setSession, removeSession, updateSession, setStatus, setEmailVerifiedAt } = actions;
export default reducer;

