
import { usePage } from "@inertiajs/react";
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';

export const Header = () => {

    const { translations, locale } = usePage().props;

    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a
                href="/"
                className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
            >
                Hubby
            </a>
            <Router>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <NavLink
                            activeclassname='active'
                            className='nav-link px-2 link-secondary'
                            to='/'>
                            {translations.header.menu.home}
                        </NavLink>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-2 link-dark">
                            {translations.header.menu.library}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-2 link-dark">
                            {translations.header.menu.rank}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-2 link-dark">
                            {translations.header.menu.shop}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-2 link-dark">
                            {translations.header.menu.profile}
                        </a>
                    </li>
                </ul>
            </Router>
            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-primary me-2">
                    {translations.header.buttons.login}
                </button>
                <button type="button" className="btn btn-primary">
                    {translations.header.buttons.register}
                </button>
            </div>
        </header>
    )
}

export default Header;
