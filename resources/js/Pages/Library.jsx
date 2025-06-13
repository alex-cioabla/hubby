


export const Library = () => {

    document.title = "Library - " + appConfig.name;

    return (<>
    <div className="container mt-4 p-5 rounded-4 bg-body-tertiary">
        <section>
            <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                <h2 className="mb-4">La tua libreria</h2>
                <div className="d-flex justify-content-between align-items-center">
                    <img src="storage/images/avatar_dummy.jpg" className="img-thumbnail rounded-2" alt="..." />
                    <div>
                        <h5>Fortnite</h5>
                        <p>Battle royale</p>
                    </div>
                    <div>
                        <h5>Data</h5>
                        <p>10/06/2025</p>
                    </div>
                    <div>
                        <h5>Ore giocate</h5>
                        <p>634 H 22 Mins</p>
                    </div>
                    <div>
                        <h5>Stato</h5>
                        <p>Scaricato</p>
                    </div>
                    <button type="button" className="btn btn-outline-primary">Download</button>
                </div>
                                <div className="d-flex justify-content-between align-items-center">
                    <img src="storage/images/avatar_dummy.jpg" className="img-thumbnail rounded-2" alt="..." />
                    <div>
                        <h5>Fortnite</h5>
                        <p>Battle royale</p>
                    </div>
                    <div>
                        <h5>Data</h5>
                        <p>10/06/2025</p>
                    </div>
                    <div>
                        <h5>Ore giocate</h5>
                        <p>634 H 22 Mins</p>
                    </div>
                    <div>
                        <h5>Stato</h5>
                        <p>Scaricato</p>
                    </div>
                    <button type="button" className="btn btn-outline-secondary">Downloaded</button>
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
