import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import ErrorAlert from '@/Components/ErrorAlert';
import { useLoginMutation } from '@/Store/authApi';
import { fetchSession } from '@/Store/authSlice';

const Login = () => {

    const [login, { isSuccess, isLoading }] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const status = useSelector((state) => state.auth.status);
    const [message, setMessage] = useState('');

    const [fields, setFields] = useState({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {

        if (isSuccess) {
            dispatch(fetchSession())
                .unwrap()
                .then(() => {
                    document.getElementById('floatingPassword').value = '';
                    navigate('/user/profile');
                })
                .catch((error) => {
                    // Tutti  gli errori di rejectWithValue finiscono qui
                    console.error('Errore fetchSession:', error);

                    if (error.status === 401) {
                        setMessage('Sessione scaduta, effettua nuovamente il login');
                    } else if (error.type === 'NETWORK_ERROR') {
                        setMessage('Errore di connessione. Controlla la rete.');
                    } else if (error.status >= 500) {
                        setMessage('Errore del server. Riprova più tardi.');
                    } else {
                        setMessage(error.message || 'Errore nel caricamento della sessione');
                    }
                });
        }

        //OPPURE
        // if (error && error.status !== 401) {
        //     setMessage(error.data?.message || 'Errore durante il login');
        // }

    }, [isSuccess, status]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFields({
            ...fields,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        setMessage('');
        const result = await login(fields);

        if (result.error) { //result.error = [{ error }] di useLoginMutation;
            if (result.error.status === 401) {
                setMessage('Credenziali non valide');
            } else if (result.error.status === 'FETCH_ERROR') {
                setMessage('Errore di connessione. Riprova.');
            } else {
                setMessage(result.error.data?.message || 'Errore durante il login');
            }
        }

        //OPPURE
        // if (result.error) {
        //     if (result.error.status === 401) {
        //         setMessage('Credenziali non valide');
        //     }
        // }
    };

    return (
        <>
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
            <a href="/" className="mb-3">
                <img src="/storage/images/logo.png" alt="logo" className="" width="190" />
            </a>
            <form onSubmit={submit}>
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
                <ErrorAlert messages={(message ? [message] : [])} className="mt-2" />
                <p>
                    {appConfig.canResetPassword && (
                        <Link
                            to='/password-forgot'
                        >
                            Hai dimenticato la password?
                        </Link>
                    )}
                </p>
                <button className="btn btn-primary w-100 py-2" type="submit" disabled={isLoading}>
                    Accedi
                </button>
                <p className="mt-4 mb-3 text-light">© {new Date().getFullYear()} Hubby</p>
            </form>
        </>
    )
}

export default Login;
