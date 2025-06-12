import { useDispatch, useSelector } from 'react-redux';

export const Profile = () => {

    document.title = "Profile - " + appConfig.name;

    const { user } = useSelector((state) => state.auth);

    return (<>
        <section>
            <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-4">
                        <img src="storage/images/profile_dummy.jpg" className="rounded-2" alt="..." />
                    </div>
                    <div className="col-12 col-sm-4">
                        <button className="btn btn-primary">Offline</button>
                        <h4 className="mt-2">{user.name}</h4>
                        <p> You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                        <button className="btn btn-outline-primary">Start</button>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-bottom py-3">
                                        <p className="mb-0">Games download</p>
                                        <span className="color-hb">3</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-bottom py-3">
                                        <p className="mb-0">Friends online</p>
                                        <span className="color-hb">3</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-bottom py-3">
                                        <p className="mb-0">Live streams</p>
                                        <span className="color-hb">3</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                        <p className="mb-0">Clip</p>
                                        <span className="color-hb">3</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mt-5">
            <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                <h2 className="mb-4">Your most popular clips</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card border border-0 h-100 rounded-4 bg-body-tertiary">
                            <div className="card-body py-4 px-3">
                                <img src="storage/images/console_category.jpg" className="card-img-top rounded-4" alt="..." />
                                <h6 className="card-title mt-3">Console</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border border-0 h-100 rounded-4 bg-body-tertiary">
                            <div className="card-body py-4 px-3">
                                <img src="storage/images/console_category.jpg" className="card-img-top rounded-4" alt="..." />
                                <h6 className="card-title mt-3">Videogiochi</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mt-5">
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
    </>
    )
}

export default Profile;
