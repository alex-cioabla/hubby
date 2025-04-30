import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authService',
    tagTypes: ['AUTH'],
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
        login: builder.mutation({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body: body
            })
        }),
        register: builder.mutation({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                body: body
            })
        }),
        logout: builder.mutation({
            query: (body) => ({
                url: '/logout',
                method: 'POST'
            })
        }),
        passwordForgot: builder.mutation({
            query: (body) => ({
                url: '/password-forgot',
                method: 'POST',
                body: body
            })
        }),
        passwordReset: builder.mutation({
            query: (body) => ({
                url: '/password-reset',
                method: 'POST',
                body: body
            })
        }),
        passwordConfirm: builder.mutation({
            query: (body) => ({
                url: '/password-confirm',
                method: 'POST',
                body: body
            })
        }),
        emailVerificationResend: builder.mutation({
            query: (body) => ({
                url: '/email-verification-resend',
                method: 'POST',
                body: body
            })
        }),
    })
});

export const { useLoginMutation,
    useLogoutMutation,
    usePasswordForgotMutation,
    usePasswordResetMutation,
    usePasswordConfirmMutation,
    useRegisterMutation,
    useEmailVerificationResendMutation
} = authApi;
