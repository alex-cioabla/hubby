import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import InputError from '@/Components/InputError';
import { useForgotPasswordMutation } from '@/Store/authApi';
import { setStatus } from '@/Store/authSlice';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [forgotPassword, { data, error, isLoading }] = useForgotPasswordMutation();
    const dispatch = useDispatch();
    const status = useSelector((state) => state.auth.status);

    useEffect(() => {

        if (data) { //Da controllare presenza errori non data
            dispatch(setStatus(data));
        }

    }, [data]);

    const submit = (e) => {
        e.preventDefault();

       forgotPassword({email: email});
    };

    return (
        <main style={{ maxWidth: "330px", padding: "1rem" }} className="w-100 m-auto">

            <div className="mb-4 fw-bolder fs-5 text-muted">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 fw-bolder fs-4 text-muted text-success">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="form-floating">
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@esempio.it"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Indirizzo email</label>
                    <InputError message={error} className="mt-2" />
                </div>

                <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading}>
                    Email Password Reset Link
                </button>
            </form>
        </main>
    );
}

export default ForgotPassword;
