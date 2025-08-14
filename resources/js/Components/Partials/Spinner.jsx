import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

const Spinner = ({show = null}) => {

    // const location = useLocation();
    const [documentLoaded, setDocumentLoaded] = useState(false);
    useEffect(() => {

        const toggleSpinner = () => {
            setDocumentLoaded(true);
        }

        window.addEventListener('load', toggleSpinner);

        if (document.readyState === "complete") {
            toggleSpinner();
        }

        return () => {
            window.removeEventListener('load', toggleSpinner);
        }

    }, [/*location,*/show])

    const shouldShow = show !== null ? show : !documentLoaded;

    if (!shouldShow) {
        return null;
    }

    return (
        <div id="spinner" className="position-fixed z-1 bg-dark h-100 w-100">
            <div id="spinner" className="position-absolute top-50 start-50 translate-middle">
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Spinner;
