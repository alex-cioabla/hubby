import ErrorAlert from '@/Components/ErrorAlert';
import { useUserDeleteMutation } from '@/Store/userApi';
import { useState, useEffect, useRef } from 'react';
import { Modal } from 'bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { removeSession } from '@/Store/authSlice';
import { useDispatch } from "react-redux";

const UserDelete = () => {

    const password = useRef('');
    const [userDelete, {data, reset, error, isLoading}] = useUserDeleteMutation();
    const userDeleteModal = Modal.getInstance(document.getElementById('userDeleteModal'));

    const passwordErrors = error?.data?.errors?.password ?? [];
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();

        userDelete({password: password.current.value})
    };

    useEffect(() => {
        const handleModalClose = () => {
            reset();
        };
        if (userDeleteModal) {
            userDeleteModal.addEventListener('hidden.bs.modal', handleModalClose);
        }

      return () => {
        userDeleteModal.removeEventListener('hidden.bs.modal', handleModalClose);
      }
    }, [])


    useEffect(() => {
        password.current.focus();
        history.scrollRestoration = 'auto';
        if (data) {
            userDeleteModal.hide();
            dispatch(removeSession());
            navigate('/');
        }
        if(error) {
            password.current.focus();
        }
        if (data || error) {
            reset();
        }

        return () => {
            history.scrollRestoration = 'manual';
        };

    }, [data, error])


    return (
        <section>
            <header>
                <h2 className="fw-bolder fs-5 text-muted">
                    Cancellazione account
                </h2>

                <p className="mt-1 fw-bolder fs-6 text-muted">
                    Una volta che il tuo account è cancellato, tutte le tue risorse e dati
                    saranno cancellato per sempre. Prima di cancellare il tuo account,
                    per favore scarica ogni dato o informatizione che desideri mantenere.
                </p>
            </header>

            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Cancella account
            </button>

            <div
                className="modal fade"
                id="userDeleteModal"
                tabIndex={-1}
                aria-labelledby="userDeleteModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="userDeleteModalLabel">
                                Sei sicuro di volere cancellato il tuo account?
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <p>
                                Una volta che l'account è cancellato, tutte le sue risors e dati
                                saranno cancellati per sempre. Per favore inserisci la tua
                                password per confermare se vuoi cancellare per sempre il tuo account.
                            </p>
                            <form onSubmit={submit} className="p-6">
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    ref={password}
                                    value={password.current.value}
                                />
                                <label htmlFor="password">Indirizzo email</label>
                                <ErrorAlert message={passwordErrors} className="mt-2" />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancella
                            </button>
                            <button type="button" className="btn btn-primary" disabled={isLoading}>
                                Cancella account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserDelete;
