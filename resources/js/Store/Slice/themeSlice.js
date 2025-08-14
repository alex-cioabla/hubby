import { createSlice } from "@reduxjs/toolkit";

const initialState = window.localStorage.getItem('theme') || 'auto';
const color = getColor(initialState);
document.documentElement.setAttribute('data-bs-theme', color);

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: initialState
    },
    reducers: {
        setTheme: (state, action) => {

            window.localStorage.setItem('theme', action.payload);
            state.value = action.payload;

            const color = getColor(action.payload);
            document.documentElement.setAttribute('data-bs-theme', color);
        }
    }
});

function getColor(theme) {
    switch (theme) {
        case 'dark':
        case 'light':
            return theme;
        case 'auto':
            const auto = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            return auto;
        default:
            break;
    }

    return null;
}

const { actions, reducer } = themeSlice;
export const { setTheme } = actions;
export default reducer;

