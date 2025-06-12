import React, { useState, useEffect } from 'react';
import { usePasswordConfirmMutation } from '@/Store/authApi';
import { useNavigate  } from 'react-router-dom';
import ErrorAlert from '@/Components/ErrorAlert';
import Preloader from '@/Components/Preloader';

const PasswordConfirm = () => {

    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [passwordConfirm, {data, error, isLoading}] = usePasswordConfirmMutation();

    const passwordErrors = error?.data?.errors?.password ?? [];

    useEffect(() => {
        document.getElementById('password').focus();

        if (data) {
            document.getElementById('password').value = '';
            navigate('/dashboard');
        }
    }, [data, error]);

    const submit = (e) => {
        e.preventDefault();

        passwordConfirm({password: password});
    };

    return (
        <>
        <a href="/" className="d-block mb-3"><img src="storage/images/logo.png" alt="logo" className="img-fluid img-thumbnail" /></a>
            <div className="mb-3 fw-bolder text-muted text-center">
                This is a secure area of the application. <br />
                Please confirm your password before continuing.
            </div>

            <form onSubmit={submit}>
                <div className="form-floating mb-3">
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        autoComplete="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    <label htmlFor="password">Password</label>
                    <ErrorAlert messages={passwordErrors} className="mt-2" />
                </div>

                <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading}>
                        Conferma
                </button>
            </form>
        </>
    );
}

export default PasswordConfirm;
