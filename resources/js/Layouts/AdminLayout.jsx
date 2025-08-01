import { NavLink, Link, Outlet} from 'react-router-dom';

export default function AdminLayout() {

    return (
        <>
            <header
                className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link
                    className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white py-3 bg-black shadow-sm"
                    to="/">
                    Hubby
                </Link>
                <ul className="navbar-nav flex-row d-md-none">
                    <li className="nav-item text-nowrap">
                        <button
                            className="nav-link px-3 text-white"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="bi bi-list"></i>
                        </button>
                    </li>
                </ul>
            </header>
            <div className="container-fluid">
                <div className="row">
                    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                        <div
                            className="offcanvas-md offcanvas-end bg-body-tertiary"
                            tabIndex={-1}
                            id="sidebarMenu"
                            aria-labelledby="sidebarMenuLabel"
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="sidebarMenuLabel">
                                    Hubby
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    data-bs-target="#sidebarMenu"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            to="/dashboard"
                                        >
                                            <i className="bi bi-house-door-fill"></i>
                                            Dashboard
                                        </NavLink>
                                    </li>
                                </ul>
                                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                                    <span>Titolo</span>
                                    <a
                                        className="link-secondary"
                                        href="#"
                                        aria-label="Add a new report"
                                    >
                                    </a>
                                </h6>
                                <ul className="nav flex-column mb-auto">
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                        <i className="bi bi-file-earmark"></i>
                                            Voce 1
                                        </a>
                                    </li>
                                </ul>
                                <hr className="my-3" />
                                <ul className="nav flex-column mb-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link d-flex align-items-center gap-2" to="/user/profile">
                                            <i className="bi bi-person-fill"></i>
                                            Profilo
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link d-flex align-items-center gap-2" to="/logout">
                                            <i className="bi bi-door-closed"></i>
                                            Disconetti
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}
