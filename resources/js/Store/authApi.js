import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authService',
    tagTypes: ['AUTH'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'api'
    }),
    endpoints : builder => ({
        login: builder.mutation({
            query: (body) => ({
                url: '/store',
                method: 'POST',
                body: body,
                headers: {
                    Accept: 'application/json'
                }
            })
        })
    })
});

export const { useLoginMutation } = authApi;
