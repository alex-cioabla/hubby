import { useState, useEffect } from 'react';
import { usePasswordUpdateMutation } from '@/Store/userApi';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '@/Components/ErrorAlert';

const PasswordUpdate = () => {

    const [passwordUpdate, {isSuccess, data, error, isLoading}] = usePasswordUpdateMutation();

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

        if (error) {
            if (currentPasswordErrors.lenght) {
                setFields({...fields, current_password: ''});
                document.getElementById('currentPassword').focus();
            }
            if (passwordConfirmationErrors.lenght) {
                setFields({...fields, password_confirmation: ''});
                document.getElementById('passwordConfirm').focus();
            }
        }
        if (data) {
            navigate(-1);
        }

    }, [data, error])

    const submit = (e) => {
        e.preventDefault();

        passwordUpdate(fields);
    };

    return (
        <main style={{ maxWidth: "330px", padding: "1rem" }} className="w-100 m-auto">
            <header>
                <h2 className="fs-4 fw-normal text-dark">
                    Aggiorna password
                </h2>

                <p className="mt-1 fs-5 text-muted">
                    Assicurati che il tuo account utilizzi una password lunga, random per essere al sicuro.
                </p>
            </header>

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

                <button className="btn btn-primary w-100 py-2" disabled={isLoading}>
                    Salva
                </button>

                <ErrorAlert messages={(data?.message !== undefined ? [data.message] : [])} className="mt-2" />
            </form>
        </main>
    );
}

export default PasswordUpdate;
