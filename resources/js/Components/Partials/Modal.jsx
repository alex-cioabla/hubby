import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

// forwardRef è una funzione di react che permette ad solo ad un componente di accettare una ref come parametro
//(poterla gestire con hook appositi (useImperativeHandle) e usarla con le nuova gestione nel DOM)
const Modal = forwardRef(({ title, body, footer, size = '', reset = false }, ref) => {

    const modalRef = useRef(null);
    const modal = useRef(null); //oppure window.bootstrap.Modal.getInstance(modalRef);

    // GESTIONE EVENTI ESTERNA (SENZA LISTENERS)
    // useImperativeHandle è un hook che permette di gestire custom il comportamento di ref
    useImperativeHandle(ref,() => ({
        //chiamando il metodo open sul ref viene eseguita questa funzione
        open: () => {
            if (!modal.current && modalRef.current) {
                modal.current = new window.bootstrap.Modal(modalRef.current, {
                    backdrop: true,
                    keyboard: true
                });
            }
            modal.current?.show();
        },
        //oppure tramite date attribute data-bs-toggle="modal" data-bs-target="#idmodal"

        close: () => {
            modal.current?.hide();
        }
        //oppure tramite tramite data attribute data-bs-dismiss="modal" viene gestita in automatica da bootstrap (non ha bisogno di un id sul modal)
      }));

    useEffect(() => {

        const modalElement = modalRef.current;
        if (!modalElement) return;

        //Evento chiusura del modal
        const handleModalClose = () => {
            const forms = modalElement.querySelectorAll('form');
            forms?.forEach(form => form.reset());
        };

        //Listener evento chiusura
        modalElement.addEventListener('hidden.bs.modal', handleModalClose);

        //Rimozione listener all'unmount componente
        return () => {
            modalElement.removeEventListener('hidden.bs.modal', handleModalClose);
            modal.current?.dispose();
            modal.current = null;
        }

    }, [reset]);

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
