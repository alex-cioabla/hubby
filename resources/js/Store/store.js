import { configureStore } from "@reduxjs/toolkit";

import translationsReducer from "@/Store/Slice/translationSlice";
import authReducer from "@/Store/Slice/authSlice";
import themeReducer from "@/Store/Slice/themeSlice"

import { authApi } from "@/Store/Api/authApi";
import { userApi } from "@/Store/Api/userApi";
import { categoryApi } from "./Api/categoryApi";
import { IGDBApi } from "./Api/IGDBApi";

const store = configureStore({
    reducer: {
        localization: translationsReducer,
        auth: authReducer,
        theme: themeReducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [IGDBApi.reducerPath]: IGDBApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        authApi.middleware,
        userApi.middleware,
        categoryApi.middleware,
        IGDBApi.middleware
      ),
});

export default store;
