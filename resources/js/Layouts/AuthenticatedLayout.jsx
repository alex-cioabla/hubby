import { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

export default function AuthenticatedLayout() {

    return (
        <>
            <style>
                {`
            .bi {
                display: inline-block;
                width: 1rem;
                height: 1rem;
                }

                /*
                * Sidebar
                */

                @media (min-width: 768px) {
                .sidebar .offcanvas-lg {
                    position: -webkit-sticky;
                    position: sticky;
                    top: 48px;
                }
                .navbar-search {
                    display: block;
                }
                }

                .sidebar .nav-link {
                font-size: .875rem;
                font-weight: 500;
                }

                .sidebar .nav-link.active {
                color: #2470dc;
                }

                .sidebar-heading {
                font-size: .75rem;
                }

                /*
                * Navbar
                */

                .navbar-brand {
                padding-top: .75rem;
                padding-bottom: .75rem;
                background-color: rgba(0, 0, 0, .25);
                box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
                }

                .navbar .form-control {
                padding: .75rem 1rem;
                }

            `}
            </style>
            <header
                className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a
                    className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"
                    href="#">
                    Company name
                </a>
                <ul className="navbar-nav flex-row d-md-none">
                    <li className="nav-item text-nowrap">
                        <button
                            className="nav-link px-3 text-white"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSearch"
                            aria-controls="navbarSearch"
                            aria-expanded="false"
                            aria-label="Toggle search"
                        >
                            <svg className="bi" aria-hidden="true">
                                <use xlinkHref="#search" />
                            </svg>
                        </button>
                    </li>
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
                            <svg className="bi" aria-hidden="true">
                                <use xlinkHref="#list" />
                            </svg>
                        </button>
                    </li>
                </ul>
                <div id="navbarSearch" className="navbar-search w-100 collapse">
                    <input
                        className="form-control w-100 rounded-0 border-0"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </div>
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
                                    Company name
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
                                        <a
                                            className="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            href="#"
                                        >
                                            <svg className="bi" aria-hidden="true">
                                                <use xlinkHref="#house-fill" />
                                            </svg>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                            <svg className="bi" aria-hidden="true">
                                                <use xlinkHref="#file-earmark" />
                                            </svg>
                                            Orders
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                            <svg className="bi" aria-hidden="true">
                                                <use xlinkHref="#cart" />
                                            </svg>
                                            Products
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                            <svg className="bi" aria-hidden="true">
                                                <use xlinkHref="#people" />
                                            </svg>
                                            Customers
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                            <svg className="bi" aria-hidden="true">
                                                <use xlinkHref="#graph-up" />
                                            </svg>
                                            Reports
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                            <svg className="bi" aria-hidden="true">
                                                <use xlinkHref="#puzzle" />
                                            </svg>
                                            Integrations
                                        </a>
                                    </li>
                                </ul>
                                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                                    <span>Saved reports</span>
                                    <a
                                        className="link-secondary"
                                        href="#"
                                        aria-label="Add a new report"
                                    >
                                        <svg className="bi" aria-hidden="true">
                                            <use xlinkHref="#plus-circle" />
                                        </svg>
                                    </a>
                                </h6>
                                <ul className="nav flex-column mb-auto">
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                            <svg className="bi" aria-hidden="true">
                                                <use xlinkHref="#file-earmark-text" />
                                            </svg>
                                            Current month
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                            <svg className="bi" aria-hidden="true">
                                                <use xlinkHref="#file-earmark-text" />
                                            </svg>
                                            Last quarter
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                            <svg className="bi" aria-hidden="true">
                                                <use xlinkHref="#file-earmark-text" />
                                            </svg>
                                            Social engagement
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                            <svg className="bi" aria-hidden="true">
                                                <use xlinkHref="#file-earmark-text" />
                                            </svg>
                                            Year-end sale
                                        </a>
                                    </li>
                                </ul>
                                <hr className="my-3" />
                                <ul className="nav flex-column mb-auto">
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                            <svg className="bi" aria-hidden="true">
                                                <use xlinkHref="#gear-wide-connected" />
                                            </svg>
                                            Settings
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                                            <svg className="bi" aria-hidden="true">
                                                <use xlinkHref="#door-closed" />
                                            </svg>
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}
