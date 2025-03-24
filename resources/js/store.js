import { configureStore } from "@reduxjs/toolkit";
import translationsReducer from "@/Store/translationSlice";

const store = configureStore({
    reducer: {
        localization: translationsReducer,
    },
});

export default store;
