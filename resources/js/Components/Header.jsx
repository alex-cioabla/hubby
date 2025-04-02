import { NavLink, Link, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useReducer } from 'react';

export const Header = () => {
    const { translations, locale } = useSelector((state) => state.localization);
    let { lang } = useParams();

    lang = lang === locale ? lang : '';

    function themeReducer(state, action) {
        switch (action.type) {
            case 'dark':
            case 'light':
                document.documentElement.setAttribute('data-bs-theme', action.type);
                break;
            case 'auto':
                const colorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-bs-theme', colorTheme);
                break;
            default:
                break;
        }
        state = action.type;
        return state;
    }

    const [theme, dispatch] = useReducer(themeReducer, document.documentElement.getAttribute('data-bs-theme'));

    const toggleTheme = (newTheme) => {
        window.localStorage.setItem('theme', newTheme);
        dispatch({type:newTheme});
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
                </ul>
                <div className="col-md-3 text-end">
                    <Link to={`${lang}/login`} className="btn btn-outline-primary me-2">
                        {translations.header.buttons.login}
                    </Link>
                    <Link to={`${lang}/login`} className="btn btn-primary">
                        {translations.header.buttons.register}
                    </Link>
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
