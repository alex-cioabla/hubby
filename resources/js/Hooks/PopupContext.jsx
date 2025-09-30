import { createContext, useContext } from "react";

// createContext è una funzione default di react che crea un contesto dove convidere le props (dati) tra componenti
//(senza doverle passare come parametro tra loro)
const PopupContext = createContext();

export const usePopupContext = () => {
    // useContext è un hook predefinito che legge il contesto in parametro e restituisce i dati (popupPromise)
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error('usePopupContext must be used within a PopupContext');
    }
    return context;
}

export default PopupContext;
