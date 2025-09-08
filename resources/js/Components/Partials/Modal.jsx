import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

const Modal = forwardRef(({ title, body, footer, size = '', reset = false }, ref) => {

    const modalRef = useRef(null);
    const modal = useRef(null);

    // useImperativeHandle è un hook che permette di gestire custom il comportamento di ref
    useImperativeHandle(ref,() => ({
        //chiamando il metodo setshow sul ref viene eseguita questa funzione
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
        //oppure tramite tramite data attribute data-bs-dismiss="modal" viene gestita in automatica da bootstrap
      }));

    useEffect(() => {

        //Evento chiusura del modal
        const handleModalClose = () => {
            const forms = modalRef.current?.querySelectorAll('form');
            forms?.forEach(form => form.reset());
        };

        //Listener evento chiusura
        if (modalRef.current) {
            modalRef.current.addEventListener('hidden.bs.modal', handleModalClose);
        }

        //Rimozione listener all'unmount componente
        return () => {
        if (modalRef.current) {
            modalRef.current.removeEventListener('hidden.bs.modal', handleModalClose);
        }
        if (modal.current) {
            modal.current.dispose();
            modal.current = null;
        }
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
