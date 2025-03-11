
import { router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export const Footer = ({locale}) => {

    const [currentLanguage, setCurrentLanguage] = useState(locale);

    useEffect(() => {
        setCurrentLanguage(locale);
    }, [locale]);

    const changeLanguage = (language) => {
        if (language !== currentLanguage) {
            router.visit(`/${language}`, { preserveState: true });
        }
    };

    return (
        <footer>
            <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

                <div className="col-md-4 d-flex align-items-center">
                    <a
                        href="/"
                        className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
                    >
                        Logo
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© {new Date().getFullYear()} Hubby</span>
                </div>

                <div className="col mb-3">
                    <h5>Lingue</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a onClick={() => changeLanguage('it')} className="nav-link p-0 text-body-secondary">
                                Italiano
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a onClick={() => changeLanguage('en')} className="nav-link p-0 text-body-secondary">
                                Inglese
                            </a>
                        </li>
                    </ul>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-body-secondary" href="#">
                            <i className="bi bi-instagram" width={24} height={24}></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-body-secondary" href="#">
                            <i className="bi bi-instagram" width={24} height={24}></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-body-secondary" href="#">
                            <i className="bi bi-instagram" width={24} height={24}></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
