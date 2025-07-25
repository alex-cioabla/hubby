import { createSlice } from "@reduxjs/toolkit";
import { fetchSession } from "./authThunk";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: window.localStorage.getItem('status') ? window.localStorage.getItem('status') : window.sessionStorage.getItem('status'),
        error: null
    },
    reducers: {
        removeSession: (state) => {
            state.user = null;
            state.status = null;

            window.sessionStorage.removeItem('status');
            window.localStorage.removeItem('status');
        },
        setStatus: (state, action) => {
            state.status = action.payload;
            window.sessionStorage.setItem('status', action.payload);
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
                const storage = action.payload.remember ? window.localStorage : window.sessionStorage;
                storage.setItem('status', action.payload.status);
                state.error = null;
            })
            .addCase(fetchSession.rejected, (state, action) => {
                state.user = null;
                state.status = null;
                window.sessionStorage.removeItem('status');
                window.localStorage.removeItem('status');
                state.error = action.payload;
            }
        )
    }
});

export { fetchSession };
const { actions, reducer } = authSlice;
export const { setUser, removeSession, setStatus } = actions;
export default reducer;
