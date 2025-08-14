import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCsrfToken } from '@/Utils/api';

export const categoryApi = createApi({
    reducerPath: 'categoryService',
    tagTypes: ['CATEGORY'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/admin',
        credentials: 'include',
        prepareHeaders: (headers) => {
            const csrfToken = getCsrfToken();
            if (csrfToken) {
                headers.set('X-XSRF-TOKEN', csrfToken);
            }
            headers.set('Accept', 'application/json');
            headers.set('Content-Type', 'application/json');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/api/categories',
            providesTags: ['CATEGORY'],
            transformResponse: (response) => {
                return response.success ? response.data : [];
            },
            transformErrorResponse: (response) => {
                return response.data?.message || 'Errore nel caricamento delle categorie';
            }
        }),
        insertCategory: builder.mutation({
            query: (body) => ({
                url: '/api/categories',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['CATEGORY'],
            // transformErrorResponse: (response) => {
            //     // Trasforma l'errore per il frontend
            //     if (response.status === 500) {
            //         return response.data?.message || 'Errore del server durante l\'inserimento';
            //     }
            //     return 'Errore sconosciuto durante l\'inserimento';
            // }
        }),
    })
});

export const {
    useGetCategoriesQuery,
    useInsertCategoryMutation
} = categoryApi;
