import { useRef, useState } from 'react';
import { useSearchGamesQuery } from "@/Store/Api/IGDBApi";
import Spinner from '@/Components/Partials/Spinner';
import { DataTable } from '@/Components/Partials/DataTable';
import NavTabs from '@/Components/Partials/NavTabs';

export const Library = () => {

    document.title = "Library - " + appConfig.name;

    //tramite la proprietà skip posso skippare la query se seach non va valore
    const { data: games = [], isLoading } = useSearchGamesQuery();

    if (isLoading) {
        return <Spinner />
    }

    return (<>
        <div className="container mt-3 p-5 rounded-4 bg-body-tertiary">
            <section>
                <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                        <h2 className="h2 mb-4">La Tua <span className="text-decoration-underline">Libreria</span></h2>
                    {/* <DataTable
                        data={useSearchGamesQuery()}
                        columns={[
                            { name: 'name', header: 'Nome' },
                        ]}
                        actions={[{
                            button: 'btn-outline-primary',
                            icon: 'bi-pencil',
                            event: (row) => { resetUpdate(); setCategory(row); modal.current.open(); }
                        }, {
                            button: 'btn-outline-danger',
                            icon: 'bi-trash',
                            event: (row) => { resetDelete(); handleDelete(row.id) }
                        }]}>

                    </DataTable> */}

                        <NavTabs
                            id={'liste'}
                            tabs={[
                                {label: 'TAB1', content: <p>CIAO</p>},
                                {label: 'TAB2', content: <p>CIAO 2</p>},
                                {label: 'TAB3', content: <p>CIAO 3</p>},
                            ]}
                            actions={true}
                        >

                        </NavTabs>

                    {/* {
                        games.map(game => (
                            <div className="row gy-2 mb-4 mb-0">

                                <div className="col-12 col-sm-2 text-center">
                                    <img src={game.cover.url} className="img-thumbnail rounded-2" alt="..." />
                                </div>
                                <div className="col-6 col-sm-2" >
                                    <h5>{game.name}</h5>
                                </div>
                                <div className="col-6 col-sm-2">
                                    <h5>Data</h5>
                                    <p>10/06/2025</p>
                                </div>
                                <div className="col-6 col-sm-2">
                                    <h5>Ore giocate</h5>
                                    <p>634 H 22 Mins</p>
                                </div>
                                <div className="col-6 col-sm-2">
                                    <h5>Stato</h5>
                                    <p>Scaricato</p>
                                </div>
                                <div className="col-12 col-sm-2 text-center">
                                    <button type="button" className="btn btn-outline-primary">Download</button>
                                </div>
                            </div>
                        ))
                    } */}
                </div>
            </section>
        </div>
    </>
    )
}

export default Library;
