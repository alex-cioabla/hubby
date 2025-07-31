import { createSlice } from "@reduxjs/toolkit";
import { fetchSession } from "./authThunk";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: null,
        error: null,
        mustVerifyEmail: false,
        authenticated: window.localStorage.getItem('authenticated') || window.sessionStorage.getItem('authenticated')
    },
    reducers: {
        setAuthenticated: (state, action) => {
            state.authenticated = true;

            const storage = action.payload ? window.localStorage : window.sessionStorage;
            storage.setItem('authenticated', true);
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        removeSession: (state) => {
            state.user = null;
            state.status = null;
            state.error = null;
            state.mustVerifyEmail = false;

            window.sessionStorage.removeItem('authenticated');
            window.localStorage.removeItem('authenticated');
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSession.pending, (state) => {
                state.error = null;
            })
            .addCase(fetchSession.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.status = action.payload.status;
                state.mustVerifyEmail = action.payload.mustVerifyEmail;
                state.error = null;
            })
            .addCase(fetchSession.rejected, (state, action) => {
                state.user = null;
                state.status = null;
                state.mustVerifyEmail = false;
                state.error = action.payload;
            }
        )
    }
});

export { fetchSession };
const { actions, reducer } = authSlice;
export const { setUser, removeSession, setStatus, setAuthenticated } = actions;
export default reducer;
