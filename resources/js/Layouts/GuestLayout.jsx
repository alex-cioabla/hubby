import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams, useNavigate, Outlet } from 'react-router-dom';

import { fetchTranslations } from "@/Store/translationSlice";
import { setTheme } from '@/Store/themeSlice';
import Preloader from '@/Components/Preloader';

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
                            <form className="me-auto" id="header-form-search" role="search" data-bs-theme={theme}>
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
                                            <NavLink to={`${lang}/dashboard`} className="btn btn-secondary me-2">Dashboard</NavLink>
                                        </li>
                                    )
                                }
                                {
                                    !token && (<>
                                        <li className="nav-item">
                                            <NavLink to={`${lang}/login`} className="btn btn-secondary me-2">{translations.header.buttons.login}</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to={`${lang}/register`} className="btn btn-secondary">{translations.header.buttons.register}</NavLink>
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
                <div className="container mt-4 p-5 rounded-4 bg-body-tertiary">
                    <Outlet />
                </div>
            </main>
            <footer className="my-4">
                <div className="container py-3 border-top">
                    <div className="row flex-wrap justify-content-between align-items-center">
                        <div className="col-md-4 d-flex align-items-center">
                            <a
                                href="/"
                                className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
                            >
                                <img src="storage/images/logo.png" alt="logo" className="img-fluid img-thumbnail" />
                            </a>
                            <span className="mb-3 mb-md-0 text-body-secondary">Copyright © {new Date().getFullYear()} Hubby. All rights reserved.</span>
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
                </div>
            </footer>
        </>
    );
}
