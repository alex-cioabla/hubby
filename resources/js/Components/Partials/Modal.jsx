import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

const Modal = forwardRef(({ title, body, footer, size = '', reset = false }, ref) => {

    const modalRef = useRef(null);
    const [show, setShow] = useState(false);

    //useImperativeHandle è un hook che permette di gestire custom il comportamento di ref
    useImperativeHandle(ref,() => ({
        //chiamando il metodo focus sul ref viene eseguita questa funzione
        open: () => setShow(true),
        close: () => setShow(false)
        //la chiusura tramite data attribute data-bs-dismiss="modal" viene gestita in automatica da bootstrap
      }));

    useEffect(() => {

        if (show && modalRef.current) {

            const modal = new window.bootstrap.Modal(modalRef.current, {
                backdrop: true,
                keyboard: true
            });
            //oppure tramite date attribute data-bs-toggle="modal" data-bs-target="#idmodal"

            modal.show();

            //Evento chiusura del modal
            const handleModalClose = () => {
                const forms = modalRef.current?.querySelectorAll('form');
                forms?.forEach(form => form.reset());
            };

            //Listener evento chiusura
            if (reset) {
                modalRef.current.addEventListener('hidden.bs.modal', handleModalClose);
            }

            //Rimozione listener all'unmount componente
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
            //richiamo tutti i metodi sul ref
            ref={modalRef}
            className="modal fade"
        >
            <div className={`modal-dialog ${size ? 'modal-' + size : ''} `}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">
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
    );
});

export { Modal };
