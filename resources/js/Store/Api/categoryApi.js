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
            invalidatesTags: ['CATEGORY']
        }),
        updateCategory: builder.mutation({
            query: ({id, ...body}) => ({
                url: '/api/categories/'+id,
                method: 'PATCH',
                body: body
            }),
            invalidatesTags: ['CATEGORY']
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: '/api/categories/'+id,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['CATEGORY']
        })
    })
});

export const {
    useGetCategoriesQuery,
    useInsertCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation
} = categoryApi;
