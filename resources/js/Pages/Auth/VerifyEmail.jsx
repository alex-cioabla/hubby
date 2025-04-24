import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { useNotifyEmailVerificationMutation } from '@/Store/authApi';

const VerifyEmail = () => {

    const [verifyEmail, { data, error, isLoading }] = useNotifyEmailVerificationMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const status = useSelector((state) => state.auth.status);

    useEffect(() => {

        if (data) {
            dispatch(setStatus(data));
        }

    }, [data, dispatch, navigate]);

    const submit = (e) => {
        e.preventDefault();

        verifyEmail();
    };

    return (
        <main style={{ maxWidth: "330px", padding: "1rem" }} className="w-100 m-auto">

            <div className="mb-4 fw-bolder fs-5 text-muted">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 fw-bolder fs-4 text-muted text-success">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading}>
                        Resend Verification Email
                    </button>

                    <Link
                        to='/logout'
                    >
                        Log Out
                    </Link>
                </div>
            </form>
        </main>
    );
}

export default VerifyEmail;
