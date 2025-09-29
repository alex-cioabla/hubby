import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCsrfToken } from '@/Utils/api';

export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['AUTH'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
        // Attributo ajax per inviare cookie (in questo caso XSRF-TOKEN e hubby_session) anche se il domionio è diverso (cross-origin)
        //(il frontend react ha un altro dominio -> http://localhost:5173, mentre backend http://localhost:8000)
        //(in locale o con certe impostazioni CORS non è necessario settarlo)
        credentials: 'include',
        prepareHeaders: (headers) => {
            const csrfToken = getCsrfToken();
            if (csrfToken) {
                // CSRF token è viene inviato sia tramite cookie con credentials: 'include' che tramite headers con headers.set('X-XSRF-TOKEN', csrfToken)
                //(viene inviato sia via cookies che headers per distiguere le richieste ajax dell'utente da quelle form del browser
                //+header non essere inviato in esterna se non dal javascript del dominio che fa la richiesta)
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
