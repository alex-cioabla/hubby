import { useState, useEffect } from 'react';
import { usePasswordUpdateMutation } from '@/Store/userApi';
import ErrorAlert from '@/Components/ErrorAlert';
import { Alert } from 'bootstrap';

const PasswordUpdate = () => {

    const [passwordUpdate, { data, error, isLoading, isSuccess }] = usePasswordUpdateMutation();

    const currentPasswordErrors = error?.data?.errors?.current_password ?? [];
    const passwordConfirmationErrors = error?.data?.errors?.password_confirmation ?? [];
    const passwordErrors = error?.data?.errors?.password ?? [];

    const [fields, setFields] = useState({
        password: '',
        current_password: '',
        password_confirmation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields({
            ...fields,
            [name]: value
        });
    };

    useEffect(() => {
        history.scrollRestoration = 'auto';
        if (error) {
            if (currentPasswordErrors.lenght) {
                setFields({ ...fields, current_password: '' });
                document.getElementById('currentPassword').focus();
            }
            if (passwordConfirmationErrors.lenght) {
                setFields({ ...fields, password_confirmation: '' });
                document.getElementById('passwordConfirm').focus();
            }
        }
        if (data) {
            document.getElementById('password').value = '';
            document.getElementById('current_password').value = '';
            document.getElementById('password_confirmation').value = '';
        }

        if (isSuccess) {
            const alert = document.querySelector('#alert-password-update');
            alert.classList.add('show');
            alert.classList.remove('d-none');
            setTimeout(() => {
                const bsAlert = new Alert(alert);
                bsAlert.close();
            }, 3000);
        }

        return () => {
            history.scrollRestoration = 'manual';
        };

    }, [data, error, isSuccess])

    const submit = (e) => {
        e.preventDefault();
        passwordUpdate(fields);
    };

    return (
        <div className="container mt-4 p-5 rounded-4 bg-body-tertiary">
            <section>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <h2 className="fw-bolder fs-5 text-muted">
                            Aggiorna password
                        </h2>

                        <p className="mt-1 fs-5 text-muted">
                            Assicurati che il tuo account utilizzi una password lunga, random per essere al sicuro.
                        </p>

                        <form onSubmit={submit} className="mt-6">

                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    name="current_password"
                                    className="form-control"
                                    id="current_password"
                                    value={fields.current_password}
                                    onChange={handleChange}
                                />
                                <label htmlFor="current_password">Password attuale</label>
                                <ErrorAlert messages={currentPasswordErrors} className="mt-2" />
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                                    value={fields.password}
                                    onChange={handleChange}
                                />
                                <label htmlFor="password">Nuova password</label>
                                <ErrorAlert messages={passwordErrors} className="mt-2" />
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    name='password_confirmation'
                                    className="form-control"
                                    id="password_confirmation"
                                    value={fields.password_confirmation}
                                    onChange={handleChange}
                                />
                                <label htmlFor="password_confirmation">Password di conferma</label>
                                <ErrorAlert messages={passwordConfirmationErrors} className="mt-2" />
                            </div>

                            <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                Salva
                            </button>

                            <div id="alert-password-update" className="alert alert-success alert-dismissible fade mt-2 mb-0 d-none" role="alert">
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

export default PasswordUpdate;
