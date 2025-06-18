import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams  } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { usePasswordResetMutation } from '@/Store/authApi';
import ErrorAlert from '@/Components/ErrorAlert';
import { setStatus } from '@/Store/authSlice';

export default function PasswordReset() {

    const [passwordReset, { data, error, isLoading }] = usePasswordResetMutation();
    const navigate = useNavigate();
    let { token } = useParams();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const recover_email = searchParams.get('email');
    const status = useSelector((state) => state.auth.status);

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

        passwordReset(fields);
    };

    useEffect(() => {
        if (data) {
            dispatch(setStatus(data.status));
            document.getElementById('floatingPassword').value = '';
            document.getElementById('floatingPasswordConfirmation').value = '';
            navigate('/login');
        }
    }, [data]);

    const emailErrors = error?.data?.errors?.email ?? [];
    const passwordErrors = error?.data?.errors?.password ?? [];
    const passwordConfirmationErrors = error?.data?.errors?.password_confirmation ?? [];

    return (
        <>
            <a href="/" className="navbar-brand d-block mb-3"><img src="/storage/images/logo.png" alt="logo" className="img-fluid img-thumbnail" /></a>
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
                    <ErrorAlert messages={emailErrors} className="mt-2" />
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
                    <ErrorAlert messages={passwordErrors} className="mt-2" />
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
                    <ErrorAlert messages={passwordConfirmationErrors} className="mt-2" />
                </div>

                <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading}>
                        Reset Password
                </button>
            </form>
        </>
    );
}
