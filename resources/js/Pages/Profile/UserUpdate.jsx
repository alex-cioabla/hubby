import ErrorAlert from '@/Components/Partials/ErrorAlert';
import { useUserUpdateMutation } from '@/Store/userApi';
import { useEmailVerificationResendMutation } from '@/Store/authApi';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '@/Store/authSlice';

const UserUpdate = () => {

    const { mustVerifyEmail, user } = useSelector((state) => state.auth);

    const [userUpdate, { data, error, isLoading, isSuccess }] = useUserUpdateMutation();
    const [emailVerificationResend, { data: emailData, error: emailError, isLoading: emailIsLoading, isSuccess: emailIsSuccess }] = useEmailVerificationResendMutation();

    const [fields, setFields] = useState({
        name: user?.profile?.name ?? '',
        surname: user?.profile?.surname ?? '',
        email: user?.email ?? ''
    });

    const nameErrors = error?.data?.errors?.name ?? [];
    const surNameErrors = error?.data?.errors?.surname ?? [];
    const emailErrors = error?.data?.errors?.email ?? [];

    const dispatch = useDispatch();

    const status = useSelector((state) => state.auth.status);

    useEffect(() => {
        document.getElementById('name').focus();

        if (isSuccess) {
            const alert = document.querySelector('#alert-user-update');
            alert.classList.add('show');
            alert.classList.remove('d-none');
            setTimeout(() => {
                const bsAlert = new bootstrap.Alert(alert);
                bsAlert.close();
            }, 3000);
        }

        if (emailIsSuccess) {
            dispatch(setStatus(emailData.status)); // (DA VERIFICARE)
        }
    }, [isSuccess, emailIsSuccess]);

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

    const click = (e) => {
        e.preventDefault();
        emailVerificationResend();
    }

    return (
        <div className="container mt-4 p-5 rounded-4 bg-body-tertiary">
            <section>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <h4>
                            Informazioni profilo
                        </h4>

                        <p className="mt-1 fw-bolder fs-6 text-muted">
                            Aggiorna le informazioni del tuo proflo e l'indirizzo email.
                        </p>

                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="name">Nome</label>
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
                                <label className="form-label" htmlFor="surname">Cognome</label>
                                <input
                                    name="surname"
                                    type="text"
                                    className="form-control"
                                    autoComplete="surname"
                                    id="surname"
                                    value={fields.surname}
                                    onChange={handleChange}
                                    required />

                                <ErrorAlert messages={surNameErrors} className="mt-2" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="email">Indirizzo email</label>

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
                            <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                Salva
                            </button>
                            <div id="alert-user-update" className="alert alert-success alert-dismissible fade mt-2 mb-0 d-none" role="alert">
                                {(data?.message !== undefined ? [data.message] : [])}
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UserUpdate;
