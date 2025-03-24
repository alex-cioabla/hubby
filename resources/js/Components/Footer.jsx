
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchTranslations } from "@/Store/translationSlice";

export const Footer = () => {

    const { locale } = useSelector((state) => state.localization);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeLanguage = (event, language) => {
        event.preventDefault();
        if (language !== locale) {
            navigate(`/${language}`);
            dispatch(fetchTranslations(language));
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
                            <a href="#" role="button" onClick={(e) => changeLanguage(e, 'it')} className="nav-link p-0 text-body-secondary">
                                Italiano
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" role="button" onClick={(e) => changeLanguage(e, 'en')} className="nav-link p-0 text-body-secondary">
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
                            <i className="bi bi-facebook" width={24} height={24}></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-body-secondary" href="#">
                            <i className="bi bi-twitter" width={24} height={24}></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
