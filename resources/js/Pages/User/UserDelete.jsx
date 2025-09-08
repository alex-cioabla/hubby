import { useRef, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { removeSession } from '@/Store/Slice/authSlice';
import Alert from '@/Components/Partials/Alert';
import { Modal } from '@/Components/Partials/Modal';
import { useUserDeleteMutation } from '@/Store/Api/userApi';

const UserDelete = () => {

    const password = useRef('');
    const modal = useRef('');
    const [userDelete, { data, error, isLoading, isSuccess }] = useUserDeleteMutation();

    const passwordErrors = error?.data?.errors?.password ?? [];
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {

        //password.current.focus(); // (DA VERIFICARE)
        history.scrollRestoration = 'auto';

        if (isSuccess) {
            dispatch(removeSession());
            navigate('/');
        }
        if (error) {
            password.current.focus();
        }

        return () => {
            history.scrollRestoration = 'manual';
        };

    }, [isSuccess]);

    return (
        <div className="container mt-4 p-5 rounded-4 bg-body-tertiary">
            <div className="row">
                <div className="col-12 col-sm-6">
                    <section>
                        <h4>
                            Cancellazione account
                        </h4>

                        <p className="mt-1 fw-bolder fs-6 text-muted">
                            Una volta che il tuo account è cancellato, tutte le tue risorse e dati
                            saranno cancellato per sempre. Prima di cancellare il tuo account,
                            per favore scarica ogni dato o informatizione che desideri mantenere.
                        </p>

                        <button type="button" className="btn btn-danger" onClick={() => modal.current.open()}>
                            Cancella account
                        </button>

                        <Modal
                            ref={modal}
                            title={'Sei sicuro di volere cancellato il tuo account?'}
                            body={
                                <>
                                    <p>
                                        Una volta che l'account è cancellato, tutte le sue risors e dati
                                        saranno cancellati per sempre. Per favore inserisci la tua
                                        password per confermare se vuoi cancellare per sempre il tuo account.
                                    </p>
                                    <label className="form-label" htmlFor="password">Indirizzo email</label>

                                    <input
                                        name="passwordModal"
                                        type="password"
                                        className="form-control"
                                        id="passwordModal"
                                        placeholder="Password"
                                        ref={password}
                                    />
                                    <Alert messages={passwordErrors} className="mt-2" />
                                </>
                            }
                            footer={
                                <>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        onClick={() => modal.current.close()}
                                    >
                                        Annulla
                                    </button>
                                    <button type="button" className="btn btn-danger" disabled={isLoading} onClick={() => userDelete({ password: password.current.value })}>
                                        Cancella account
                                    </button>
                                </>
                            }
                        ></Modal>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default UserDelete;
