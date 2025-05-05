import React, { useState, useEffect } from 'react';
import { usePasswordConfirmMutation } from '@/Store/authApi';
import { useNavigate  } from 'react-router-dom';
import ErrorAlert from '@/Components/ErrorAlert';

const PasswordConfirm = () => {

    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [passwordConfirm, {data, error, isLoading}] = usePasswordConfirmMutation();

    const passwordErrors = error?.data?.errors?.password ?? [];

    useEffect(() => {
        getElementById('password').focus();

        if (data) {
            navigate('/dashboard');
        }
    }, [data, error]);

    const submit = (e) => {
        e.preventDefault();

        passwordConfirm({password: password});
    };

    return (
        <main style={{ maxWidth: "330px", padding: "1rem" }} className="w-100 m-auto">

            <div className="mb-4 fw-bolder fs-5 text-muted">
                This is a secure area of the application. Please confirm your
                password before continuing.
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
                        Confirm
                </button>
            </form>
        </main>
    );
}

export default PasswordConfirm;
