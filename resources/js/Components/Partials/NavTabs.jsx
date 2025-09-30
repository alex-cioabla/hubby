import { useEffect, useRef } from 'react';
import { usePopover } from '@/Hooks/Popover';

const NavTabs = ({ id, tabs, actions = false }) => {

    const nav = useRef(null);
    const popoverRef = useRef(null);
    
    usePopover(popoverRef, { content: 'Aggiungi un elemento alla lista', placement: 'right' });

    // GESTIONE EVENTI INTERNA (CON LISTENERS)
    useEffect(() => {

        const handlers = [];
        const navLinks = nav.current.querySelectorAll('.nav-link');
        navLinks.forEach(ele => {
            const tab = new window.bootstrap.Tab(ele);

            const onClick = (event) => {
                event.preventDefault();
                //show mostra il contenuto della tab cliccata e nasconde le altre altre tabs
                tab.show();
            }

            ele.addEventListener('click', onClick);

            handlers.push(() => ele.removeEventListener('click', onClick));
        });

        return () => {
            //esegue gli elementi dell'array handlers (off) come funzioni (off())
            handlers.forEach((off) => off());
        }
    }, [tabs])

    return (
        <>
            <ul className="nav nav-tabs mb-3" role="tablist" ref={nav}>
                {
                    actions ? (
                        <>
                            {/* Example split danger button */}
                            <div className="btn-group">
                                <button type="button" className="btn btn-danger">
                                    Danger
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Separated link
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </>

                    ) : (
                        tabs.map((tab, index) => (
                            <li className="nav-item" key={`tab-${id}-${index}`} role="presentation">
                                <a
                                    id={`tab-${id}-${index}`}
                                    className={`nav-link${index === 0 ? " active" : ""}`}
                                    href={`#pane-${id}-${index}`} //Necessario a bootstrap.Tab per fare l'aggancio
                                    type="button"
                                    role="tab"
                                    aria-controls={`pane-${id}-${index}`}
                                    aria-selected={`${index === 0 ? "true" : "false"}`}
                                >
                                    {tab.label}
                                </a>
                            </li>
                        ))
                    )
                }
                {/* {
                    actions && (
                        <li className="nav-item" key={`tab-${id}-add`} role="presentation" ref={popoverRef}>
                            <button
                                id={`tab-${id}-add`}
                                className="nav-link"
                                type="button"
                                role="tab"
                                aria-controls={`pane-${id}-add`}
                                aria-selected="false"
                            >
                                <i className="bi bi-plus-square"></i>
                            </button>
                        </li>
                    )
                } */}
            </ul>
            <div className="tab-content">
                {
                    tabs.map((tab, index) => (
                        <div
                            key={`pane-${id}-${index}`}
                            id={`pane-${id}-${index}`}
                            className={`tab-pane fade${index === 0 ? ' show active' : ''}`}
                            role="tabpanel"
                            aria-labelledby={`tab-${id}-${index}`}
                        >
                            {tab.content}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default NavTabs;
