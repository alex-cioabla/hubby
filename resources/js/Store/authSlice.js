import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {

    let init = {
        token: null,
        expires_at: null,
        status: null,
        must_verified_email: true,
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
            console.log('session', session);

            state.token = session.token;
            state.expires_at = session.expires_at;
            state.must_verified_email = session.must_verified_email;
            state.user = {name: session.user.name, email: session.user.email, email_verified_at: session.email_verified_at};


            window.localStorage.setItem('session', JSON.stringify(session));
        },
        removeSession: (state) => {
            Object.keys(state).forEach(key => { state[key] = null; });
            window.localStorage.removeItem('session');
        },
        setStatus: (state, action) => {
            state.status = action.payload.status;
        },
        setEmailVerifiedAt: (state, action) => {
            state.user.email_verified_at = action.payload;

            const session = JSON.parse(window.localStorage.getItem('session'));
            session.user.email_verified_at = action.payload;

            window.localStorage.setItem("session", JSON.stringify(session));
        }
    }
});

const { actions, reducer } = authSlice;
export const { setSession, removeSession, setStatus, setEmailVerifiedAt } = actions;
export default reducer;

