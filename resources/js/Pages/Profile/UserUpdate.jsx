import ErrorAlert from '@/Components/ErrorAlert';
import { userUpdateMutation } from '@/Store/userApi';
import { useState } from 'react';
import { Transition } from '@headlessui/react';

const UserUpdate = ({ mustVerifyEmail, status }) => {

    // const user = usePage().props.auth.user;

    // const { data, setData, patch, errors, processing, recentlySuccessful } =
    //     useForm({
    //         name: user.name,
    //         email: user.email,
    //     });

    const [userUpdate, { data, error, isLoading, isSuccess }] = userUpdateMutation();

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

    const submit = (e) => {
        e.preventDefault();

        userUpdate(fields);
    };

    useEffect(() => {
        getElementById('name').focus();


      return () => {
        second
      }
    }, [third])


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

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 fs-6 text-secondary">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mb-4 fw-bolder fs-4 text-muted text-succes">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">

                    <button type="button" className="btn btn-primary" disabled={isLoading}>
                        Delete account
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
