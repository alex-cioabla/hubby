import ErrorAlert from '@/Components/ErrorAlert';
import { useUserUpdateMutation } from '@/Store/userApi';
import { useEmailVerificationResendMutation } from '@/Store/authApi';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '@/Store/authSlice';

const UserUpdate = () => {

    const mustVerifyEmail = useSelector((state) => state.auth.must_verify_email);
    const user = useSelector((state) => state.auth.user);

    const [userUpdate, { data, error, isLoading, isSuccess }] = useUserUpdateMutation();
    const [emailVerificationResend, { data : emailData, error: emailError, isLoading: emailIsLoading, isSuccess: emailIsSuccess }] = useEmailVerificationResendMutation();
    const navigate = useNavigate();

    const [fields, setFields] = useState({
        name: user.name,
        email: user.email,
    });

    const nameErrors = error?.data?.errors?.name ?? [];
    const emailErrors = error?.data?.errors?.email ?? [];

    const dispatch = useDispatch();

    const status = useSelector((state) => state.auth.status);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields({
            ...fields,
            [name]: value
        });
    };

    const submit = (e) => {
        e.preventDefault();

        userUpdate(fields);
    };

    useEffect(() => {
        document.getElementById('name').focus();
        if (data) { //Da verificare messaggio e non data
            navigate('/profile');
        }
    }, [data])

    const click = (e) => {
        e.preventDefault();

        emailVerificationResend();

        if (emailIsSuccess) {
            dispatch(setStatus(emailData.status));
        }
    }

    return (
        <section>
            <header>
                <h2 className="fw-bolder fs-5 text-muted">
                    Informazioni profilo
                </h2>

                <p className="mt-1 fw-bolder fs-6 text-muted">
                    Aggiorna le informazioni del tuo proflo e l'indirzzo email.
                </p>
            </header>

            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="name">Nome</label>
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        autoComplete="name"
                        id="name"
                        value={fields.name}
                        onChange={handleChange}
                        required />

                    <ErrorAlert messages={nameErrors} className="mt-2" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email">Indirizzo email</label>

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
                    <ErrorAlert messages={emailErrors} className="mt-2" />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 fs-6 text-secondary">
                            Your email address is unverified.
                            La tua email non è stata verificata.
                            <a onClick={click} href="#">
                                Clicca qui per inviare nuovamente la verifica via email.
                            </a>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mb-4 fw-bolder fs-4 text-muted text-succes">
                                Un nuovo link di verifica è stato inviato al tuo indirizzo email.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">

                    <button type="submit" className="btn btn-primary" disabled={isLoading}>
                        Salva
                    </button>
                    <ErrorAlert messages={(data?.message !== undefined ? [data.message] : [])} className="mt-2" />
                </div>
            </form>
        </section>
    );
}

export default UserUpdate;
