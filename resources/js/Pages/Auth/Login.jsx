import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import ErrorAlert from '@/Components/ErrorAlert';
import { useLoginMutation } from '@/Store/authApi';
import { setSession } from '@/Store/authSlice';

const Login = () => {

    const [login, { data, error, isLoading }] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const status = useSelector((state) => state.auth.status);

    const emailErrors = error?.data?.errors?.email ?? [];
    const passwordErrors = error?.data?.errors?.password ?? [];

    const [fields, setFields] = useState({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        if (data) { //(DA VERIFICARE)
            dispatch(setSession(data));
            navigate('/dashboard');
        }
    }, [data, dispatch, history]);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFields({
            ...fields,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        try {
            await login(fields).unwrap();
        } catch (error) {
            console.error('Login failed:', error.data.message);
        }
    };

    return (
        <main style={{ maxWidth: "330px", padding: "1rem" }} className="w-100 m-auto">

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
            <form onSubmit={submit}>
                Logo
                <h1 className="h3 mb-3 fw-normal">Login</h1>
                <div className="form-floating mb-3">
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="name@esempio.it"
                        value={fields.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="floatingEmail">Indirizzo email</label>
                    <ErrorAlert messages={emailErrors} className="mt-2" />
                </div>
                <div className="form-floating">
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
                <div className="form-check text-start my-3">
                    <input
                        name='remember'
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="remember-me"
                        id="flexCheckDefault"
                        checked={fields.remember}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Ricordami
                    </label>
                </div>
                <p>

                <Link
                    to='/password-forgot'
                >
                    Hai dimenticato la password?
                </Link>
                </p>
                <button className="btn btn-primary w-100 py-2" type="submit" disabled={isLoading}>
                    Accedi
                </button>
                <p className="mt-5 mb-3 text-body-secondary">© {new Date().getFullYear()} Hubby</p>
            </form>
        </main>
    )
}

export default Login;
