import { configureStore } from "@reduxjs/toolkit";
import translationsReducer from "@/Store/translationSlice";
import { authApi } from "./Store/authApi";

const store = configureStore({
    reducer: {
        localization: translationsReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        authApi.middleware
      ),
});

export default store;
