import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authService',
    tagTypes: ['AUTH'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api',
        prepareHeaders: (headers) => {
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            if (csrfToken) {
                headers.set('X-CSRF-TOKEN', csrfToken);
            }
            headers.set('Accept', 'application/json');
            return headers;
        },
    }),
    endpoints: builder => ({
        login: builder.mutation({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body: body
            })
        }),
        logout: builder.mutation({
            queryFn: async (_arg, { getState }, _extraOptions, fetchWithBaseQuery) => {
                const token = getState().auth.token;
                const result = await fetchWithBaseQuery({
                    url: '/logout',
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                return result;
            }
        }),
        forgotPassword: builder.mutation({
            query: (body) => ({
                url: '/forgot-password',
                method: 'POST',
                body: body
            })
        }),
        resetPassword: builder.mutation({
            query: (body) => ({
                url: '/reset-password',
                method: 'POST',
                body: body
            })
        }),
    })
});

export const { useLoginMutation, useLogoutMutation, useForgotPasswordMutation, useResetPasswordMutation } = authApi;
