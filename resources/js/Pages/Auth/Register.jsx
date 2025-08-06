import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import ErrorAlert from '@/Components/Partials/ErrorAlert';
import { useRegisterMutation } from '@/Store/authApi';
import { setAuthenticated, /*fetchSession*/ } from '@/Store/authSlice';

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [register, { error, isLoading, isSuccess }] = useRegisterMutation();

    const nameErrors = error?.data?.errors?.name ?? [];
    const surnameErrors = error?.data?.errors?.surname ?? [];
    const emailErrors = error?.data?.errors?.email ?? [];
    const passwordErrors = error?.data?.errors?.password ?? [];
    const passwordConfirmationErrors = error?.data?.errors?.password_confirmation ?? [];

    const [fields, setFields] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        document.getElementById('name').focus();

        if (isSuccess) {

            dispatch(setAuthenticated());
            document.getElementById('password').value = '';
            document.getElementById('password_confirmation').value = '';
            navigate('/email-verification-request');
            // dispatch(fetchSession())
            //     .unwrap()
            //     .then(() => {
            //         document.getElementById('password').value = '';
            //         document.getElementById('password_confirmation').value = '';
            //         navigate('/email-verification-request');
            //     })
            //     .catch((error) => {
            //         // Tutti  gli errori di rejectWithValue finiscono qui
            //         console.error('Errore fetchSession:', error);
            //     });
        }
    }, [isSuccess]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFields({
            ...fields,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const submit = (e) => {
        e.preventDefault();

        register(fields);
    };

    return (
        <>
            <a href="/" className="mb-3">
                <img src="/storage/images/logo.png" alt="logo" className="" width="190" />
            </a>
            <form onSubmit={submit}>
                <div className="form-floating mb-3">
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        autoComplete="name"
                        id="name"
                        value={fields.name}
                        onChange={handleChange}
                        required />
                    <label htmlFor="name">Nome</label>
                    <ErrorAlert messages={nameErrors} className="mt-2" />
                </div>
                <div className="form-floating mb-3">
                    <input
                        name="surname"
                        type="text"
                        className="form-control"
                        autoComplete="surname"
                        id="surname"
                        value={fields.surname}
                        onChange={handleChange}
                        required />
                    <label htmlFor="surname">Cognome</label>
                    <ErrorAlert messages={surnameErrors} className="mt-2" />
                </div>

                <div className="form-floating mb-3">
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        autoComplete="username"
                        value={fields.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Indirizzo email</label>
                    <ErrorAlert messages={emailErrors} className="mt-2" />
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        name='password'
                        className="form-control"
                        id="password"
                        autoComplete="new-password"
                        value={fields.password}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <ErrorAlert messages={passwordErrors} className="mt-2" />
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="password"
                        name='password_confirmation'
                        className="form-control"
                        id="password_confirmation"
                        autoComplete="new-password"
                        value={fields.password_confirmation}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password_confirmation">Conferma password</label>
                    <ErrorAlert messages={passwordConfirmationErrors} className="mt-2" />
                </div>

                <Link
                    to='/login'
                    className="d-block my-3"
                >
                    Già registrato?
                </Link>

                <button className="btn btn-primary w-100 py-2" type="submit" disabled={isLoading}>
                    Registrati
                </button>
            </form>
        </>
    );
}

export default Register;
