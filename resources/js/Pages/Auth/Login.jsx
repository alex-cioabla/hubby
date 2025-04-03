import InputError from '@/Components/default/InputError';
import { useLoginMutation } from '@/Store/authApi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [login, {error, isLoading }] = useLoginMutation();
    const route = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        try {
            const result = login(data);
            console.log('Login successful:', result);
        } catch (er) {
            console.error('Login failed:', er);
        }
    };


    return (
        <main style={{ maxWidth: "330px", padding: "1rem" }} className="w-100 m-auto">

            {appConfig.status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {appConfig.status}
                </div>
            )}
            <form onSubmit={submit}>
                Logo
                <h1 className="h3 mb-3 fw-normal">Login</h1>
                <div className="form-floating">
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@esempio.it"
                        value={data.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="floatingInput">Indirizzo email</label>
                    <InputError message={error} className="mt-2" />
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        name='password'
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={data.password}
                        onChange={handleChange}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    <InputError message={error} className="mt-2" />
                </div>
                <div className="form-check text-start my-3">
                    <input
                        name='remember'
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="remember-me"
                        id="flexCheckDefault"
                        checked={data.remember}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Ricordami
                    </label>
                </div>
                {appConfig.canResetPassword && (
                    <a
                        href={route('password/request')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                    >
                        Hai dimenticato la password?
                    </a>
                )}
                <button className="btn btn-primary w-100 py-2" type="submit" disabled={isLoading}>
                    Accedi
                </button>
                <p className="mt-5 mb-3 text-body-secondary">© {new Date().getFullYear()} Hubby</p>
            </form>
        </main>
    )
}

export default Login;
