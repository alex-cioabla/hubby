
import { Transition } from '@headlessui/react';

import React, { useState, useEffect } from 'react';
import { usePasswordUpdateMutation } from '@/Store/userApi';
import { useNavigate } from 'react-router-dom';
import InputError from '@/Components/InputError';

const PasswordUpdate = () => {

    const [passwordUpdate, {isSuccess, data, error, isLoading}] = usePasswordUpdateMutation();

    const currentPasswordErrors = error?.data?.errors?.current_password ?? [];
    const passwordConfirmErrors = error?.data?.errors?.password_confirm ?? [];
    const passwordErrors = error?.data?.errors?.password ?? [];

    const [fields, setFields] = useState({
        password: '',
        current_password: '',
        password_confirm: '',
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
            console.log('ENTRO');
            if (currentPasswordErrors.lenght) {
                setFields({...fields, current_password: ''});
                getElementById('currentPassword').focus();
            }
            if (passwordConfirmErrors.lenght) {
                setFields({...fields, password_confirm: ''});
                getElementById('passwordConfirm').focus();
            }
        }
        if (data) {
            navigate(-1);
        }

    }, [error])

    const submit = (e) => {
        e.preventDefault();

        passwordUpdate(fields);
    };

    return (
        <main style={{ maxWidth: "330px", padding: "1rem" }} className="w-100 m-auto">
            <header>
                <h2 className="fs-4 fw-normal text-dark">
                    Update Password
                </h2>

                <p className="mt-1 fs-5 text-muted">
                    Ensure your account is using a long, random password to stay
                    secure.
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
                    <label htmlFor="currentPassword">Current password</label>
                    <InputError messages={currentPasswordErrors} className="mt-2" />
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
                    <label htmlFor="password">New password</label>
                    <InputError messages={passwordErrors} className="mt-2" />
                </div>

                <div className="form-floating">
                    <input
                        type="password"
                        name='password_confirm'
                        className="form-control"
                        id="passwordConfirm"
                        value={fields.password_confirm}
                        onChange={handleChange}
                    />
                    <label htmlFor="passwordConfirm">Password confirmation</label>
                    <InputError messages={passwordConfirmErrors} className="mt-2" />
                </div>

                <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading}>
                    Save
                </button>

                <Transition
                    show={isSuccess}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Saved.
                    </p>
                </Transition>
            </form>
        </main>
    );
}

export default PasswordUpdate;
