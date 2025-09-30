import { useState, /*useCallback,*/ useEffect, useRef } from "react";
import PopupContext from '@/Hooks/PopupContext';

// usecallback è un hook default di react che memorizza una fx e la ricrea solo in caso cambino le dipendenze (le specifico nel paramentro) al render della pagina
//const functionName = useCallback(() => {}, [])

export const PopupProvider = ({ children }) => {
    const [popup, setPopup] = useState(null);
    const popupRef = useRef();

    // GESTIONE EVENTI ESTERNA (SENZA LISTENERS)
    useEffect(() => {
        if (popup) {

            const modal = new window.bootstrap.Modal(popupRef.current, {
                backdrop: 'static',
                keyboard: true
            });

            modal.show();

            return () => {
                modal.dispose();
            }
        }
    }, [popup]);

    const confirmPopup = (options = {}) => {

        return new Promise((resolve) => {
            setPopup({ ...options, resolve });
        });
    };

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

    //Funzione eventi chiusura popup
    const closeModal = () => {
        const popupElement = popupRef.current;

        if (popupElement) {
            const popupInstance = window.bootstrap.Modal.getInstance(popupElement);
            if (popupInstance) {
                popupElement.addEventListener('hidden.bs.modal', () => {
                    setPopup(null);
                // once:true l'evento viene rimosso dopo che è stato eseguito una sola volta
                }, { once: true });

                popupInstance.hide();
                return;
            }
        }
        setPopup(null);
    }

    const popupHtml = popup ? (
        <div className="modal fade" ref={popupRef}>
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
        // PopupContext è l'oggetto del contesto creato
        // Provider è il componente che fornisce i valori del contesto (value)
        // PopupContext.Provider permette l'accesso e fornisce confirmPopup del contesto PopupContext a tutti i componenti figli (<Router></Router> in app.jsx)
        <PopupContext.Provider value={{ confirmPopup }}>
            {children}
            {popupHtml}
        </PopupContext.Provider>
    );
}
