import { createSlice } from "@reduxjs/toolkit";

const initialState = window.localStorage.getItem('theme') || 'auto';

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: initialState
    },
    reducers: {
        setTheme: (state, action) => {

            window.localStorage.setItem('theme', action.payload);
            switch (action.payload) {
                case 'dark':
                case 'light':
                    document.documentElement.setAttribute('data-bs-theme', action.payload);
                    break;
                case 'auto':
                    const colorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    document.documentElement.setAttribute('data-bs-theme', colorTheme);
                    break;
                default:
                    break;
            }

            state.value = action.payload;
        }
    }
});

const { actions, reducer } = themeSlice;
export const { setTheme } = actions;
export default reducer;

