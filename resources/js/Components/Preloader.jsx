import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Preloader = () => {

    const location = useLocation();
    const [loaded, setLoaded] = useState('');

    useEffect(() => {

        const handleLoad = () => {
            setLoaded('loaded');
        }

        window.addEventListener('load', handleLoad);

        if (document.readyState === "complete") {
            setLoaded('loaded');
        }
        return () => {
            setLoaded('');
            window.removeEventListener('load', handleLoad);
        }
    }, [location])

    return (
        <div id="js-preloader" className={`js-preloader ${loaded}`}>
            <div className="preloader-inner">
                <span className="dot" />
                <div className="dots">
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </div>
    )
}

export default Preloader;
