import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';

import { fetchTranslations } from "@/Store/translationSlice";
import { setTheme } from '@/Store/themeSlice';
import Preloader from '@/Components/Preloader';

export default function MainLayout() {

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
    const location = useLocation();

    useEffect(() => {

        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 15) {
                header.classList.add('header-alt');
            } else {
                header.classList.remove('header-alt');
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>
            <Preloader></Preloader>
            <header className="header">
                <nav className="navbar navbar-expand-lg py-4">
                    <div className="container">
                        <a href="/">
                            <img src="storage/images/logo.png" alt="logo" className="" width="190" />
                        </a>
                        <div className="vr mx-4"></div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarContent">
                            <form className="me-auto d-none d-sm-block" id="header-form-search" role="search" data-bs-theme={theme}>
                                <input
                                    className="form-control me-2 border rounded-5 py-0 ps-5 pe-2"
                                    type="search"
                                    placeholder="Type Something"
                                    aria-label="Search"
                                    id='header-search'
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
                            <ul className="navbar-nav nav text-center text-sm-start">
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
                                    !token && (<>
                                        <li className="nav-item">
                                            <NavLink to={`${lang}/login`} className="btn btn-primary me-2">{translations.header.buttons.login}</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to={`${lang}/register`} className="btn btn-primary">{translations.header.buttons.register}</NavLink>
                                        </li>
                                    </>
                                    )
                                }
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle btn btn-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                            {
                                    token && (
                                        <div className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="storage/images/avatar_dummy.jpg" className="rounded-circle" alt="..." width="32"/>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <NavLink to={`${lang}/profile`} className="dropdown-item">
                                                        Profilo
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={`${lang}/user-settings`} className="dropdown-item">
                                                        Impostazioni
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/logout" className="dropdown-item">
                                                        Disconetti
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="my-4">
                <div className="container py-3 border-top">
                    <div className="row flex-wrap justify-content-between align-items-center">
                        <div className="col-md-4 text-center text-sm-start">
                            <a href="/" className="d-inline-block mb-2">
                                <img src="storage/images/logo.png" alt="logo" className="" width="190" />
                            </a>
                            <p className="text-body-secondary">Copyright © {new Date().getFullYear()} Hubby. All rights reserved.</p>
                        </div>

                        <div className="col mb-3 text-center text-sm-left">
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
                        <ul className="col-md-4 list-unstyled d-flex justify-content-center justify-content-sm-end">
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
                </div>
            </footer>
        </>
    );
}
