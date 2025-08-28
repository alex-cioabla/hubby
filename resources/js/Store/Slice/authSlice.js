import { createSlice } from "@reduxjs/toolkit";
import { fetchSession } from "@/Store/Thunk/authThunk";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: null,
        error: null,
        mustVerifyEmail: false,
        remember: window.localStorage.getItem('remember') || window.sessionStorage.getItem('remember')
    },
    reducers: {
        rememberSession: (state, action) => {
            state.remember = true;

            const storage = action.payload ? window.localStorage : window.sessionStorage;
            storage.setItem('remember', true);
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        removeSession: (state) => {
            state.user = null;
            state.status = null;
            state.error = null;
            state.mustVerifyEmail = false;
            state.remember = false;

            window.sessionStorage.removeItem('remember');
            window.localStorage.removeItem('remember');
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
export const { setUser, removeSession, setStatus, rememberSession } = actions;
export default reducer;
