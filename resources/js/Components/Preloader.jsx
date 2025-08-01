import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

const Preloader = ({show = null}) => {

    // const location = useLocation();
    const [documentLoaded, setDocumentLoaded] = useState(false);
    useEffect(() => {

        const togglePreloader = () => {
            setDocumentLoaded(true);
        }

        window.addEventListener('load', togglePreloader);

        if (document.readyState === "complete") {
            togglePreloader();
        }

        return () => {
            window.removeEventListener('load', togglePreloader);
        }

    }, [/*location,*/show])

    const shouldShow = show !== null ? show : !documentLoaded;

    if (!shouldShow) {
        return null;
    }

    return (
        <div id="preloader" className="position-fixed z-1 bg-dark h-100 w-100">
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

export default Preloader;
