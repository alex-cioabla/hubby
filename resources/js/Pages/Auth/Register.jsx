import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import InputError from '@/Components/InputError';
import { useRegisterMutation } from '@/Store/authApi';
import { setCredentials } from '@/Store/authSlice';
import TextInput from '@/Components/TextInput';

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [register, { data, error, isLoading }] = useRegisterMutation();

    const nameErrors = error?.data?.errors?.name ?? [];
    const emailErrors = error?.data?.errors?.email ?? [];
    const passwordErrors = error?.data?.errors?.password ?? [];
    const passwordConfirmationErrors = error?.data?.errors?.password_confirmation ?? [];

    const [fields, setFields] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        if (data) { //Da controllare presenza errori non data
            dispatch(setCredentials(data));
            // navigate('/dashboard');
        }
    }, [data, dispatch, navigate]);

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
        <main style={{ maxWidth: "330px", padding: "1rem" }} className="w-100 m-auto">

            <form onSubmit={submit}>
                <div className="form-floating mb-3">
                    <TextInput
                        name="name"
                        type="name"
                        className="form-control"
                        autoComplete="name"
                        id="name"
                        isFocused={true}
                        value={fields.name}
                        onChange={handleChange}
                        required/>
                    <label htmlFor="name">Nome</label>
                    <InputError messages={nameErrors} className="mt-2" />
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
                    <InputError messages={emailErrors} className="mt-2" />
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
                    <InputError messages={passwordErrors} className="mt-2" />
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
                    <label htmlFor="password_confirmation">Conferma assword</label>
                    <InputError messages={passwordConfirmationErrors} className="mt-2" />
                </div>

                <Link
                    to='/login'
                >
                    Già registrato?
                </Link>

                <button className="btn btn-primary w-100 py-2 mt-2" type="submit" disabled={isLoading}>
                    Registrati
                </button>
            </form>
        </main>
    );
}

export default Register;
