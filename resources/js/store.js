import { configureStore } from "@reduxjs/toolkit";
import translationsReducer from "@/Store/translationSlice";
import authReducer from "@/Store/authSlice";
import { authApi } from "./Store/authApi";

const store = configureStore({
    reducer: {
        localization: translationsReducer,
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        authApi.middleware
      ),
});

export default store;
