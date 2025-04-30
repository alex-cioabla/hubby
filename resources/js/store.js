import { configureStore } from "@reduxjs/toolkit";
import translationsReducer from "@/Store/translationSlice";
import authReducer from "@/Store/authSlice";
import { authApi } from "./Store/authApi";
import { userApi } from "./Store/userApi";

const store = configureStore({
    reducer: {
        localization: translationsReducer,
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        authApi.middleware,
        userApi.middleware
      ),
});

export default store;
