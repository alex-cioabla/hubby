import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCsrfToken } from '@/Utils/api';

export const authApi = createApi({
    reducerPath: 'authService',
    tagTypes: ['AUTH'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
        credentials: 'include',
        prepareHeaders: (headers) => {
            const csrfToken = getCsrfToken();
            if (csrfToken) {
                //Aggiungo il token CSFR gettato per gli endpoints
                headers.set('X-XSRF-TOKEN', csrfToken);
            }
            headers.set('Accept', 'application/json');
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: builder => ({
        register: builder.mutation({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                body: body
            })
        }),
        login: builder.mutation({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body: body
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
        logout: builder.mutation({
            query: (body) => ({
                url: '/logout',
                method: 'POST'
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
        })
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
