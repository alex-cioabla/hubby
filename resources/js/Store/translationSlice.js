import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const fetchTranslations = createAsyncThunk(
    "translations/fetchTraslantions",
    async (locale) => {
        const response = await fetch(`/api/translations/${locale}`);

        if(!response.ok){
            throw new Error("Errore nel recupero delle traduzioni");
        }

        return response.json();
    }
)

const translationSlice = createSlice({
    name: "translations",
    initialState: {
        translations: appConfig.translations,
        locale: appConfig.locale,
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTranslations.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTranslations.fulfilled, (state, action) => {
                state.translations = action.payload.translations;
                state.locale = action.payload.locale;
                state.status = "succeeded";
            })
            .addCase(fetchTranslations.rejected, (state) => {
                state.status = "failed";
            });
    },
});

const { reducer } = translationSlice;
export default reducer;
export { fetchTranslations };
