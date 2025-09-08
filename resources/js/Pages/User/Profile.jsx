import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Profile = () => {

    document.title = "Profile - " + appConfig.name;

    const { user } = useSelector((state) => state.auth);

    return (<>
        <div className="container mt-4 p-5 rounded-4 bg-body-tertiary">
            <section>
                <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                    <div className="row align-items-center g-3">
                        <div className="col-12 col-sm-4">
                            <img src="/storage/images/profile_dummy.jpg" className="img-fluid rounded-2" alt="..." />
                        </div>
                        <div className="col-12 col-sm-4">
                            <h4><span className="badge text-bg-primary">Offline</span></h4>
                            <h4 className="mt-2">{user.name}</h4>
                            <p> Tocca il pulsante qui sotto per andare alle tue impostazioni profilo</p>
                            <Link to="/user/settings" role="button" className="btn btn-outline-primary">Impostazioni</Link>
                            {user.role_names.includes('admin') && (
                                <Link to="/admin/dashboard" role="button" className="btn btn-primary ms-2">Area Admin</Link>
                            )}
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-bottom py-3">
                                            <p className="mb-0">Giochi inseriti</p>
                                            <span className="text-primary">3</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-bottom py-3">
                                            <p className="mb-0">Categorie di cui fai parte</p>
                                            <span className="text-primary">3</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-bottom py-3">
                                            <p className="mb-0">Amici</p>
                                            <span className="text-primary">3</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                            <p className="mb-0">Seguiti</p>
                                            <span className="text-primary">3</span>
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
                    <h2 className="mb-4">I tuoi <span className="text-decoration-underline">annunci</span> più popolari</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card border border-0 h-100 rounded-4 bg-body-tertiary">
                                <div className="card-body py-4 px-3">
                                    <img src="/storage/images/console_category.jpg" className="card-img-top rounded-4" alt="..." />
                                    <h6 className="card-title mt-3">Crash Bandicoot</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                    <h2 className="mb-4">La tua libreria</h2>
                    <div className="row gy-2 mb-4 mb-0">
                        <div className="col-12 col-sm-2 text-center">
                            <img src="/storage/images/avatar_dummy.jpg" className="img-thumbnail rounded-2" alt="..." />

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
                        <Link to="/user/library" type="button" className="btn btn-primary">Libreria completa</Link>
                    </div>
                </div>
            </section>

        </div>
    </>
    )
}

export default Profile;
