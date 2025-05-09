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
                    Delete Account
                </h2>

                <p className="mt-1 fw-bolder fs-6 text-muted">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>

            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Delete account
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
                                Are you sure you want to delete your account?
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
                                Once your account is deleted, all of its resources and
                                data will be permanently deleted. Please enter your
                                password to confirm you would like to permanently delete
                                your account.
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
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary" disabled={isLoading}>
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserDelete;
