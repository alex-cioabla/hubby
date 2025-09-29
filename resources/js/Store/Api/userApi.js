import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCsrfToken } from '@/Utils/api';

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['USER'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/user',
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
    endpoints: builder => ({
        passwordUpdate: builder.mutation({
            query: (body) => ({
                url: '/password-update',
                method: 'PUT',
                body: body
            })
        }),
        userDelete: builder.mutation({
            query: (body) => ({
                url: '/delete',
                method: 'DELETE',
                body: body
            })
        }),
        userUpdate: builder.mutation({
            query: (body) => ({
                url: '/update',
                method: 'PATCH',
                body: body
            })
        })
    })
});

export const {
    usePasswordUpdateMutation,
    useUserDeleteMutation,
    useUserUpdateMutation
} = userApi;
