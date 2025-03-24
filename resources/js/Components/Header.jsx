import { NavLink, Link, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

export const Header = () => {
    const { translations } = useSelector((state) => state.localization);
    let {lang} = useParams();
    lang = lang ? lang : '';

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
                        <NavLink className={({ isActive }) => isActive ? "link-secondary nav-link px-2" : "nav-link px-2" }
                            to={`${lang}/`}>
                            {translations.header.menu.home}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${lang}/library`} className={({ isActive }) => isActive ? "link-secondary nav-link px-2" : "nav-link px-2" }>
                            {translations.header.menu.library}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${lang}/rank`} className={({ isActive }) => isActive ? "link-secondary nav-link px-2" : "nav-link px-2" }>
                            {translations.header.menu.rank}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${lang}/shop`} className={({ isActive }) => isActive ? "link-secondary nav-link px-2" : "nav-link px-2" }>
                            {translations.header.menu.shop}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${lang}/profile`} className={({ isActive }) => isActive ? "link-secondary nav-link px-2" : "nav-link px-2" }>
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
                </div>
            </div>
        </header>
    )
}

export default Header;
