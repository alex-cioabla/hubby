


export const Library = () => {

    document.title = "Library - " + appConfig.name;

    return (<>
        <div className="container mt-4 p-5 rounded-4 bg-body-tertiary">
            <section>
                <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                    <h2 className="mb-4">La tua libreria</h2>
                    <div className="row gy-2 mb-4 mb-0">
                        <div className="col-12 col-sm-2 text-center">
                            <img src="storage/images/avatar_dummy.jpg" className="img-thumbnail rounded-2" alt="..." />

                        </div>
                        <div className="col-6 col-sm-2">
                            <h5>Fortnite</h5>
                            <p>Battle royale</p>
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
                    <div className="row gy-2 mb-4 mb-0">
                        <div className="col-12 col-sm-2 text-center">
                            <img src="storage/images/avatar_dummy.jpg" className="img-thumbnail rounded-2" alt="..." />

                        </div>
                        <div className="col-6 col-sm-2">
                            <h5>Fortnite</h5>
                            <p>Battle royale</p>
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
                </div>
                <div className="row mt-n4">
                    <div className="col-12 text-center">
                        <button type="button" className="btn btn-primary">Carica più contenuti</button>
                    </div>
                </div>
            </section>
        </div>
    </>
    )
}

export default Library;
