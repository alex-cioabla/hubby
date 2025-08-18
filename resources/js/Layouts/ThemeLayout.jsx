import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { NavLink, Outlet } from 'react-router-dom';

// import { fetchTranslations } from "@/Store/translationSlice";
import ThemeToggle from '@/Components/Partials/ThemeToggle';

export default function ThemeLayout() {

    const user = useSelector(state => state.auth.user);
    // const { translations, locale } = useSelector((state) => state.localization);
    // let { lang } = useParams();
    // lang = lang === locale ? lang : '';

    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const changeLanguage = (event, language) => {
    //     event.preventDefault();
    //     if (language !== locale) {
    //         navigate(`/${language}`);
    //         dispatch(fetchTranslations(language));
    //     }
    // };

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
            <header className="header">
                <nav className="navbar navbar-expand-lg py-4">
                    <div className="container">
                        <a href="/">
                            <img src="/storage/images/logo.png" alt="logo" className="" width="190" />
                        </a>
                        <div className="vr mx-4"></div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarContent">
                            <search className="me-auto d-none d-sm-block">
                                <form id="header-form-search" role="search">
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroup-sizing-default">
                                            <i className="bi bi-search"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-default"
                                        />
                                    </div>
                                </form>
                            </search>
                            <ul className="navbar-nav nav text-center text-sm-start">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
                                        to={`/`} end>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`/rank`} className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                                        Classifica
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`/shop`} className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                                        Negozio
                                    </NavLink>
                                </li>
                                {
                                    !user && (<>
                                        <li className="nav-item">
                                            <NavLink to={`/login`} className="btn btn-primary me-2">Accedi</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to={`/register`} className="btn btn-primary">Registrati</NavLink>
                                        </li>
                                    </>
                                    )
                                }
                                <li className="nav-item dropdown">
                                    <ThemeToggle type={'link'}></ThemeToggle>
                                </li>
                            </ul>
                            {
                                user && (
                                    <div className="dropdown">
                                        <a href="#" className="link-body-emphasis dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="/storage/images/avatar_dummy.jpg" className="rounded-circle" alt="..." width="32" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink to={`user/profile`} className="dropdown-item">
                                                    Profilo
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={`user/settings`} className="dropdown-item">
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
                                <img src="/storage/images/logo.png" alt="logo" className="" width="190" />
                            </a>
                            <p className="text-light">Copyright © {new Date().getFullYear()} Hubby. All rights reserved.</p>
                        </div>

                        {/* <div className="col mb-3 text-center text-sm-left">
                            <h5>Lingue</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" role="button" onClick={(e) => changeLanguage(e, 'it')} className="nav-link p-0">
                                        Italiano
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" role="button" onClick={(e) => changeLanguage(e, 'en')} className="nav-link p-0">
                                        Inglese
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                        <ul className="col-md-4 list-unstyled d-flex justify-content-center justify-content-sm-end">
                            <li className="ms-3">
                                <a href="#">
                                    <i className="bi bi-instagram" width={24} height={24}></i>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#">
                                    <i className="bi bi-facebook" width={24} height={24}></i>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="#">
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
