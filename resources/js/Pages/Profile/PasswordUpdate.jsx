import { useState, useEffect } from 'react';
import { usePasswordUpdateMutation } from '@/Store/userApi';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '@/Components/ErrorAlert';

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
    const navigate = useNavigate();

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
            navigate(-1);
        }

        return () => {
            history.scrollRestoration = 'manual';
        };

    }, [data, error])

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
                                    id="currentPassword"
                                    value={fields.current_password}
                                    onChange={handleChange}
                                />
                                <label htmlFor="currentPassword">Password attuale</label>
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
                                    id="passwordConfirmation"
                                    value={fields.password_confirmation}
                                    onChange={handleChange}
                                />
                                <label htmlFor="passwordConfirmation">Password di conferma</label>
                                <ErrorAlert messages={passwordConfirmationErrors} className="mt-2" />
                            </div>

                            <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                Salva
                            </button>

                            {/* DA VERIFICARE */}
                            <ErrorAlert messages={(isSuccess && data?.message !== undefined ? [data.message] : [])} className="mt-2" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PasswordUpdate;
