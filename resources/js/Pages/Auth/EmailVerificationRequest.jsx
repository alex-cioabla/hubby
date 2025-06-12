import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEmailVerificationResendMutation } from '@/Store/authApi';
import { setStatus } from '@/Store/authSlice';

const EmailVerificationRequest = () => {

    const [emailVerificationResend, { data, isLoading }] = useEmailVerificationResendMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const status = useSelector((state) => state.auth.status);

    useEffect(() => {

        if (data) {

            if (data.verified) {
                navigate('/dashboard');
            }else{
                dispatch(setStatus(data.status));
                navigate(-1);
            }
        }

    }, [data]);

    const submit = (e) => {
        e.preventDefault();

        emailVerificationResend();
    };

    return (
        <>
            <a href="/" className="d-block mb-3"><img src="storage/images/logo.png" alt="logo" className="img-fluid img-thumbnail" /></a>
            <div className="mb-3 fw-bolder text-muted text-center">
                Thanks for signing up! <br />
                Before getting started, could you verify your email address by clicking on the link we just emailed to you? <br />
                If you didn't receive the email, we will gladly send you another.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 fw-bolder fs-4 text-muted text-success">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <form onSubmit={submit} className="text-center">
                <button className="btn btn-primary w-100 py-2 mb-2" disabled={isLoading}>
                    Resend Verification Email
                </button>

                <Link
                    to='/logout'
                >
                    Log Out
                </Link>
            </form>
        </>
    );
}

export default EmailVerificationRequest;
