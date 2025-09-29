import { useEffect, useRef } from 'react';
import { usePopover } from '@/Hooks/usePopover';

const NavTabs = ({ tabs, actions = false }) => {

    const nav = useRef(null);
    const {popoverRef} = usePopover({content: 'Aggiungi un elemento alla lista', placement: 'right'});

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
                    tabs.map((tab, index) => (
                        <li className="nav-item" key={`nav-tab-${index}`} role="presentation">
                            <a
                                className={`nav-link${index === 0 ? " active" : ""}`}
                                href={`#tab-pane-${index}`} //Necessario a bootstrap.Tab per fare l'aggancio
                                type="button"
                                role="tab"
                                aria-controls={`tab-pane-${index}`}
                                aria-selected={`${index === 0 ? "true" : "false"}`}
                            >
                                {tab.label}
                            </a>
                        </li>
                    ))
                }
                {
                    actions && (
                        <li className="nav-item" key={`nav-tab-add`} role="presentation" ref={popoverRef}>
                            <button
                                className="nav-link"
                                id="nav-add-tab"
                                type="button"
                                role="tab"
                                aria-controls="nav-add-tab"
                                aria-selected="false"
                            >
                                <i className="bi bi-plus-square"></i>
                            </button>
                        </li>
                    )
                }
            </ul>
            <div className="tab-content">
                {
                    tabs.map((tab, index) => (
                        <div
                            key={`tab-pane-${index}`}
                            className={`tab-pane fade${index === 0 ? ' show active' : ''}`}
                            id={`tab-pane-${index}`}
                            role="tabpanel"
                            aria-labelledby={`tab-pane-${index}-tab`}
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
