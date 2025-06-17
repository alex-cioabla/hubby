import ErrorAlert from '@/Components/ErrorAlert';
import { useUserDeleteMutation } from '@/Store/userApi';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeSession } from '@/Store/authSlice';
import { useDispatch } from "react-redux";

const UserDelete = () => {

    const password = useRef('');
    const [userDelete, { data, reset, error, isLoading }] = useUserDeleteMutation();

    const passwordErrors = error?.data?.errors?.password ?? [];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userDeleteModal = document.getElementById('userDeleteModal');

    useEffect(() => {

        //Eventi chiusura del modal
        const handleModalClose = () => {
            reset();
            password.current.value = '';
        };
        if (userDeleteModal) {
            userDeleteModal.addEventListener('hidden.bs.modal', handleModalClose);
        }

        return () => {
            if (userDeleteModal) {
                userDeleteModal.removeEventListener('hidden.bs.modal', handleModalClose);
            }
        }
    }, []);

    const submit = (e) => {
        e.preventDefault();

        userDelete({ password: password.current.value })
    };

    useEffect(() => {

        password.current.focus();
        history.scrollRestoration = 'auto';

        if (data) {
            //onSuccess: () => closeModal() (DA VERIFICARE)
            dispatch(removeSession());
            navigate('/');
        }
        if (error) {
            password.current.focus();
        }
        if (data || error) {
            reset();
            password.current.value = '';
        }

        return () => {
            history.scrollRestoration = 'manual';
        };

    }, [data, error]);

    return (
        <div className="container mt-4 p-5 rounded-4 bg-body-tertiary">
            <div className="row">
                <div className="col-12 col-sm-6">
                    <section>
                        <h2 className="fw-bolder fs-5 text-muted">
                            Cancellazione account
                        </h2>

                        <p className="mt-1 fw-bolder fs-6 text-muted">
                            Una volta che il tuo account è cancellato, tutte le tue risorse e dati
                            saranno cancellato per sempre. Prima di cancellare il tuo account,
                            per favore scarica ogni dato o informatizione che desideri mantenere.
                        </p>

                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#userDeleteModal">
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
                                    <form onSubmit={submit} className="p-6">

                                        <div className="modal-body">
                                            <p>
                                                Una volta che l'account è cancellato, tutte le sue risors e dati
                                                saranno cancellati per sempre. Per favore inserisci la tua
                                                password per confermare se vuoi cancellare per sempre il tuo account.
                                            </p>
                                            <label htmlFor="password">Indirizzo email</label>

                                            <input
                                                name="passwordModal"
                                                type="password"
                                                className="form-control"
                                                id="passwordModal"
                                                placeholder="Password"
                                                ref={password}
                                            />
                                            <ErrorAlert message={passwordErrors} className="mt-2" />
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Annulla
                                            </button>
                                            <button type="submit" className="btn btn-danger" disabled={isLoading}>
                                                Cancella account
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default UserDelete;
