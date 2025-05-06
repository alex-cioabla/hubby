import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userService',
    tagTypes: ['USER'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api',
        prepareHeaders: (headers, { getState }) => {
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            if (csrfToken) {
                headers.set('X-CSRF-TOKEN', csrfToken);
            }

            const token = getState().auth?.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            headers.set('Accept', 'application/json');
            return headers;
        },
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
                url: '/user-delete',
                method: 'DELETE',
                body: body
            })
        }),
        userUpdate: builder.mutation({
            query: (body) => ({
                url: '/user-update',
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
