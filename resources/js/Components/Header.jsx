import { NavLink, Link, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

export const Header = () => {
    const { translations, locale } = useSelector((state) => state.localization);
    const [theme, setTheme] = useState(document.documentElement.getAttribute('data-bs-theme'));
    let { lang } = useParams();

    lang = lang === locale ? lang : '';

    useEffect(() => {

        const savedTheme = window.localStorage.getItem('theme') || theme;
        let colorTheme = getColorTheme(savedTheme);

        setTheme(savedTheme);
        document.documentElement.setAttribute('data-bs-theme', colorTheme);

    }, []);

    const toggleTheme = (newTheme) => {

        let colorTheme = getColorTheme(newTheme);
        document.documentElement.setAttribute('data-bs-theme', colorTheme);
        window.localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    }

    function getColorTheme(theme) {
        let colorTheme = theme;
        switch (theme) {
            case 'dark':
                colorTheme = 'dark';
                break;
            case 'light':
                colorTheme = 'light';
                break;
            case 'auto':
                colorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                break;
            default:
                break;
        }
        return colorTheme;
    }

    return (
        <header>
            <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a
                    href="/"
                    className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                >
                    Logo
                </a>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "link-secondary nav-link px-2" : "nav-link px-2"}
                            to={`${lang}/`} end>
                            {translations.header.menu.home}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${lang}/library`} className={({ isActive }) => isActive ? "link-secondary nav-link px-2" : "nav-link px-2"}>
                            {translations.header.menu.library}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${lang}/rank`} className={({ isActive }) => isActive ? "link-secondary nav-link px-2" : "nav-link px-2"}>
                            {translations.header.menu.rank}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${lang}/shop`} className={({ isActive }) => isActive ? "link-secondary nav-link px-2" : "nav-link px-2"}>
                            {translations.header.menu.shop}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${lang}/profile`} className={({ isActive }) => isActive ? "link-secondary nav-link px-2" : "nav-link px-2"}>
                            {translations.header.menu.profile}
                        </NavLink>
                    </li>
                </ul>
                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">
                        {translations.header.buttons.login}
                    </button>
                    <button type="button" className="btn btn-primary">
                        {translations.header.buttons.register}
                    </button>
                        <button
                            className="btn btn-link dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-circle-half"></i>
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
                </div>
            </div>
        </header>
    )
}

export default Header;
