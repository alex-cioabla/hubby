import { useEffect, useRef } from 'react';

export const Modal = ({ show, id, title, body, footer, size = '', reset = false }) => {

    const modalRef = useRef(null);

    useEffect(() => {

        if (show && modalRef.current) {

            const modal = new window.bootstrap.Modal(modalRef.current, {
                backdrop: true,
                keyboard: true
            });
            const handleModalClose = () => {
                const forms = modalRef.current?.querySelectorAll('form');
                forms?.forEach(form => form.reset());
            };

            modal.show();

            if (reset) {
                //Eventi chiusura del modal
                modalRef.current.addEventListener('hidden.bs.modal', handleModalClose);
            }


            return () => {
                if (modal) {
                    if (reset && modalRef.current) {
                        modalRef.current.removeEventListener('hidden.bs.modal', handleModalClose);
                    }
                    modal.dispose();
                }
            }
        }

    }, [show, reset]);

    if (!show) return null;

    return (
        <div
            ref={modalRef}
            className="modal fade"
            id={id}
            tabIndex={-1}
            aria-labelledby={id + "Label"}
            aria-hidden="true"
        >
            <div className={`modal-dialog ${size ? 'modal-' + size : ''} `}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={id + "Label"}>
                            {title}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <form>
                        <div className="modal-body">
                            {body}
                        </div>
                        <div className="modal-footer">
                            {footer}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



