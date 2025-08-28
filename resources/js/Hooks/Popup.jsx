import { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";

//createContext è una funzione default di react che crea un contesto dove convidere le props (dati) tra componenti
//(senza doverle passare come parametro tra loro)
const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [popup, setPopup] = useState(null);
    const modalRef = useRef();

    useEffect(() => {
        if (popup) {

            const modal = new window.bootstrap.Modal(modalRef.current, {
                backdrop: 'static',
                keyboard: true
            });

            modal.show();

            return () => {
                modal.dispose();
            }
        }
    }, [popup]);

    //usecallback è un hook default di react che memorizza una fx e la ricrea solo in caso cambino le dipendenze (le specifico nel paramentro) al render della pagina
    //const popupFunction = useCallback(() => {}, [])
    const popupPromise = (options = {}) => {

        return new Promise((resolve) => {
            setPopup({ ...options, resolve });
        });
    };

    const closeModal = () => {
        if (modalRef.current) {
            const modalInstance = window.bootstrap.Modal.getInstance(modalRef.current);
            if (modalInstance) {
                modalInstance.hide();

                modalRef.current.addEventListener('hidden.bs.modal', () => {
                    setPopup(null);
                // once:true l'evento viene rimosso dopo che è stato eseguito una sola volta
                }, { once: true });
                return;
            }
        }
        setPopup(null);
    }

    const handleConfirm = () => {
        if (popup?.resolve) {
            popup.resolve(true);
        }
        closeModal();
    };

    const handleCancel = () => {
        if (popup?.resolve) {
            popup.resolve(false);
        }
        closeModal();
    };

    const modalPopup = popup ? (
        <div className="modal fade" ref={modalRef}>
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <i className="bi bi-exclamation-triangle-fill text-warning"> {popup.message}</i>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleCancel}
                        >
                            {popup.cancelText}
                        </button>
                        <button
                            type="button"
                            className={`btn btn-${popup.confirmType}`}
                            onClick={handleConfirm}
                        >
                            {popup.confirmText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;

    return (
        //PopupContext è l'oggetto del contesto creato
        //Provider è il componente che fornisce i valori del contesto (value)
        //PopupContext.Provider permette l'accesso e fornisce popupPromise del contesto PopupContext a tutti i componenti figli (<Router></Router> in app.jsx)
        <PopupContext.Provider value={{ popupPromise }}>
            {children}
            {modalPopup}
        </PopupContext.Provider>
    );
}

export const usePopup = () => {
    //useContext è un hook predefinito che legge il contesto in parametro e restituisce i dati (popupPromise)
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error('usePopup must be used within a PopupContext');
    }
    return context;
}
