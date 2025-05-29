import { NavLink, useParams, useNavigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { fetchTranslations } from "@/Store/translationSlice";
import DarkBtnSecondary from '@/Components/DarkBtnSecondary';
import { setTheme } from '@/Store/themeSlice';

export default function GuestLayout() {

    const { translations, locale } = useSelector((state) => state.localization);
    let { lang } = useParams();

    lang = lang === locale ? lang : '';

    const dispatchTheme = useDispatch();
    const theme = useSelector(state => state.theme.value);

    const toggleTheme = (newTheme) => {
        dispatchTheme(setTheme(newTheme));
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeLanguage = (event, language) => {
        event.preventDefault();
        if (language !== locale) {
            navigate(`/${language}`);
            dispatch(fetchTranslations(language));
        }
    };

    const token = useSelector(state => state.auth.token);

    return (
        <>
            <div id="js-preloader" className="js-preloader">
                <div className="preloader-inner">
                    <span className="dot" />
                    <div className="dots">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>

            <header className="header-area">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand"
                            href="/"
                        >
                            <img src="storage/images/logo.png" alt="logo" className="border-end" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarContent">
                            <form className="me-auto" id="search" role="search" data-bs-theme={theme}>
                                <input
                                    className="form-control me-2 border rounded-5 py-0 ps-5 pe-2"
                                    type="search"
                                    placeholder="Type Something"
                                    aria-label="Search"
                                    id='searchText'
                                    name="searchKeyword"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    fill="currentColor"
                                    className="bi bi-search"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>

                            </form>
                            <ul className="navbar-nav mb-2 mb-lg-0 nav">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                                        to={`${lang}/`} end>
                                        {translations.header.menu.home}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`${lang}/library`} className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                                        {translations.header.menu.library}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`${lang}/rank`} className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                                        {translations.header.menu.rank}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`${lang}/shop`} className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                                        {translations.header.menu.shop}
                                    </NavLink>
                                </li>
                                {
                                    token && (
                                        <li className="nav-item">
                                            <DarkBtnSecondary to={`${lang}/dashboard`} className="me-2">
                                                Dashboard
                                            </DarkBtnSecondary>
                                        </li>
                                    )
                                }
                                {
                                    !token && (<>
                                        <li className="nav-item">
                                            <DarkBtnSecondary to={`${lang}/login`} className="me-2">
                                                {translations.header.buttons.login}
                                            </DarkBtnSecondary>
                                        </li>
                                        <li className="nav-item">
                                            <DarkBtnSecondary to={`${lang}/register`}>
                                                {translations.header.buttons.register}
                                            </DarkBtnSecondary>
                                        </li>
                                    </>
                                    )
                                }
                                <li className="nav-item dropdown">
                                    <button
                                        className="btn btn-link nav-link dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {theme === 'dark' && <i className="bi bi-moon-fill"></i>}
                                        {theme === 'light' && <i className="bi bi-sun-fill"></i>}
                                        {theme === 'auto' && <i className="bi bi-circle-half"></i>}
                                        <span className="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <button
                                                type="button"
                                                className={theme === 'light' ? "active dropdown-item d-flex align-items-center" : "dropdown-item d-flex align-items-center"}
                                                onClick={() => toggleTheme('light')}
                                            >
                                                <i className="bi bi-sun-fill me-2 opacity-50"></i>
                                                Light
                                                <i className="bi bi-check2 ms-auto d-none"></i>
                                            </button>

                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className={theme === 'dark' ? "active dropdown-item d-flex align-items-center" : "dropdown-item d-flex align-items-center"}
                                                onClick={() => toggleTheme('dark')}
                                            >
                                                <i className="bi bi-moon-fill me-2 opacity-50"></i>
                                                Dark
                                                <i className="bi bi-check2 ms-auto d-none"></i>
                                            </button>

                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className={theme === 'auto' ? "active dropdown-item d-flex align-items-center" : "dropdown-item d-flex align-items-center"}
                                                onClick={() => toggleTheme('auto')}
                                            >
                                                <i className="bi bi-circle-half me-2 opacity-50"></i>
                                                Auto
                                                <i className="bi bi-check2 ms-auto d-none"></i>
                                            </button>

                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
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
        </>
    );
}
