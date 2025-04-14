import React, { useState, useEffect } from 'react';
import { useResetPasswordMutation } from '@/Store/authApi';
import { useNavigate, useParams, useSearchParams  } from 'react-router-dom';
import InputError from '@/Components/InputError';

export default function ResetPassword() {

    const [resetPassword, { data, error, isLoading }] = useResetPasswordMutation();
    const navigate = useNavigate();
    let { token } = useParams();
    const [searchParams] = useSearchParams();
    const recover_email = searchParams.get('email');

    const [fields, setFields] = useState({
        email: recover_email,
        password: '',
        password_confirmation: '',
        token: token
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields({
            ...fields,
            [name]: value
        });
    };

    const submit = (e) => {
        e.preventDefault();

        resetPassword(fields);
        // navigate('/login');
    };

    return (
        <main style={{ maxWidth: "330px", padding: "1rem" }} className="w-100 m-auto">

            <form onSubmit={submit}>
                <div className="form-floating  mb-3">
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@esempio.it"
                        value={fields.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="floatingInput">Indirizzo email</label>
                    <InputError message={error} className="mt-2" />
                </div>

                <div className="form-floating  mb-3">
                    <input
                        type="password"
                        name='password'
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={fields.password}
                        onChange={handleChange}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    <InputError message={error} className="mt-2" />
                </div>

                <div className="form-floating  mb-3">
                    <input
                        type="password"
                        name='password_confirmation'
                        className="form-control"
                        id="floatingPasswordConfirmation"
                        autoComplete="new-password"
                        value={fields.password_confirmation}
                        onChange={handleChange}
                    />
                    <label htmlFor="floatingPasswordConfirmation">Password</label>
                    <InputError message={error} className="mt-2" />
                </div>

                <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading}>
                        Reset Password
                </button>
            </form>
        </main>
    );
}
