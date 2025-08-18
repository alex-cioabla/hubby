import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEmailVerificationResendMutation } from '@/Store/Api/authApi';
import { setStatus } from '@/Store/Slice/authSlice';

const EmailVerificationRequest = () => {

    const [emailVerificationResend, { data, isLoading, isSuccess }] = useEmailVerificationResendMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const status = useSelector((state) => state.auth.status);

    useEffect(() => {

        if (isSuccess) {
            if (data.verified) {
                navigate('/user/profile');
            }else{
                dispatch(setStatus(data.status));
                navigate(-1);
            }
        }

    }, [isSuccess]);

    const submit = (e) => {
        e.preventDefault();
        emailVerificationResend();
    };

    return (
        <>
            <a href="/" className="mb-3">
                <img src="/storage/images/logo.png" alt="logo" className="" width="190" />
            </a>
            <div className="mb-3 fw-bolder text-muted text-center">
                Grazie per esserti iscritto! <br />
                Prima di iniziare, potresti verificare il tuo indirizzo e-mail cliccando sul link che ti abbiamo appena inviato via email? <br />
                Se non hai ricevuto l'e-mail, saremo lieti di inviartene un'altra.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 fw-bolder fs-4 text-muted text-success">
                    Un nuovo link di verifica è stato inviato all'indirizzo e-mail
                    fornito durante la registrazione.
                </div>
            )}

            <form onSubmit={submit} className="text-center">
                <button className="btn btn-primary w-100 py-2 mb-2" disabled={isLoading}>
                    Invia nuovamente l'e-mail di verifica
                </button>

                <Link
                    to='/logout'
                >
                    Log Out
                </Link>
            </form>
        </>
    );
}

export default EmailVerificationRequest;
