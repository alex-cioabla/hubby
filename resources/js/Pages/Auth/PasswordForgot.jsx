import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate  } from 'react-router-dom';
import ErrorAlert from '@/Components/ErrorAlert';
import { usePasswordForgotMutation } from '@/Store/authApi';
import { setStatus } from '@/Store/authSlice';

const PasswordForgot = () => {

    const [email, setEmail] = useState('');
    const [passwordForgot, { data, error, isLoading }] = usePasswordForgotMutation();
    const dispatch = useDispatch();
    const status = useSelector((state) => state.auth.status);
     const navigate = useNavigate();

    useEffect(() => {

        if (data) { //(DA VERIFICARE)
            dispatch(setStatus(data.status));
            navigate(-1);
        }

    }, [data]);

    const submit = (e) => {
        e.preventDefault();

       passwordForgot({email: email});
    };

    return (
        <>
            <a href="/" className="d-block mb-3"><img src="storage/images/logo.png" alt="logo" className="img-fluid img-thumbnail" /></a>
            <div className="mb-3 fw-bolder text-muted text-center">
                Hai dimenticato la password? Nessun problema. <br />
                Facci sapere il tuo indirizzo email
                e ti invieremo un link per reimpostare la password che ti permetterà di sceglierne una nuova.e.
            </div>

            {status && (
                <div className="mb-4 fw-bolder fs-4 text-muted text-success">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="form-floating mb-3">
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
                    <ErrorAlert message={error} className="mt-2" />
                </div>

                <button className="btn btn-primary w-100" disabled={isLoading}>
                    Reset Password
                </button>
            </form>
        </>
    );
}

export default PasswordForgot;
