
import { useRef, useEffect } from 'react';

const Toast = ({ show, message, type = 'error' }) => {

    const toastRef = useRef(null);

    useEffect(() => {

        if (show && toastRef.current) {
            const toast = new window.bootstrap.Toast(toastRef.current, {
                autohide: true,
                delay: 5000
            });

            toast.show();

            return () => {
                if (toast) {
                    toast.dispose();
                }
            };
        }
    }, [show]);

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <i className="bi bi-check-circle-fill"></i>
            case 'warning':
                return <i className="bi bi-exclamation-triangle-fill"></i>
            default:
                return <i className="bi bi-x-circle-fill"></i>
        }
    }

    const getTitle = () => {
        switch (type) {
            case 'success':
                return 'Successo';
            case 'warning':
                return 'Attenzione';
            default:
                return 'Errore';
        }
    };

    const getColor = () => {
        switch (type) {
            case 'success':
                return 'success';
            case 'warning':
                return 'warning';
            default:
                return 'danger';
        }
    };

    if (!show) return null;

    return (
        <div className="toast-container position-fixed bottom-0 end-5 p-3">
            <div ref={toastRef} className={`toast text-bg-${getColor()}`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <span className="me-2">{getIcon()}</span>
                    <strong className="me-auto">{getTitle()}</strong>
                    <small>Adesso</small>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    />
                </div>
                <div className="toast-body">{message}</div>
            </div>
        </div>
    )
}

export default Toast;
