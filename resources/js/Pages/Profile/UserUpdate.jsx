import ErrorAlert from '@/Components/ErrorAlert';
import { useUserUpdateMutation } from '@/Store/userApi';
import { useEmailVerificationResendMutation } from '@/Store/authApi';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '@/Store/authSlice';

const UserUpdate = () => {

    // const user = usePage().props.auth.user;

    // const { data, setData, patch, errors, processing, recentlySuccessful } =
    //     useForm({
    //         name: user.name,
    //         email: user.email,
    //     });

    const mustVerifyEmail = useSelector((state) => state.auth.must_verify_email);

    const [userUpdate, { data, error, isLoading, isSuccess }] = useUserUpdateMutation();
    const [emailVerificationResend, { data : emailData, error: emailError, isLoading: emailIsLoading, isSuccess: emailIsSuccess }] = useEmailVerificationResendMutation();

    const [fields, setFields] = useState({
        password: '',
        current_password: '',
        password_confirmation: '',
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
                    Profile Information
                </h2>

                <p className="mt-1 fw-bolder fs-6 text-muted">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit}>
                <div>

                    <input
                        name="name"
                        type="name"
                        className="form-control"
                        autoComplete="name"
                        id="name"
                        value={fields.name}
                        onChange={handleChange}
                        required />
                    <label htmlFor="name">Nome</label>

                    <ErrorAlert messages={nameErrors} className="mt-2" />
                </div>

                <div>
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
                    <label htmlFor="email">Indirizzo email</label>
                    <ErrorAlert messages={emailErrors} className="mt-2" />
                </div>

                {/* {mustVerifyEmail && user.email_verified_at === null && ( */}
                    <div>
                        <p className="mt-2 fs-6 text-secondary">
                            Your email address is unverified.
                            <a onClick={click} href="#">
                                Click here to re-send the verification email.
                            </a>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mb-4 fw-bolder fs-4 text-muted text-succes">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                {/* )} */}

                <div className="flex items-center gap-4">

                    <button type="button" className="btn btn-primary" disabled={isLoading}>
                        Save
                    </button>

                    <Transition
                        show={isSuccess}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="fs-6 text-secondary">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}

export default UserUpdate;
