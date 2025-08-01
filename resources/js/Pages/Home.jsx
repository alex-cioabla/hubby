import { Link } from 'react-router-dom';

const Home = () => {

    document.title = "Home - " + appConfig.name;

    return (<>
        <div className="container mt-3 p-5 rounded-4 bg-body-tertiary">
            <section>
                <div className="bg-body-secondary p-5 mb-4 rounded-4" id="banner">
                    <div className="container-fluid py-5 text-center text-sm-start">
                        <p className="lead text-light">Benvenuto su Hubby</p>
                        <h1 className="display-5 fw-bold mb-3 text-uppercase">The <span className="text-primary">collector</span>'s <br/> hub</h1>
                        <Link to="/user/profile" className="btn btn-primary" role="button">Crea il tuo Hubby</Link>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                    <h2 className="mb-4 text-decoration-underline">Categorie</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card border border-0 h-100 rounded-4 bg-body-tertiary">
                                <div className="card-body py-4 px-3">
                                    <img src="/storage/images/console_category.jpg" className="card-img-top rounded-4" alt="..." />
                                    <h5 className="card-title mt-3">Console</h5>
                                    <p className="text-body-tertiary">Playstation 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                    <div className="card text-center border border-0 rounded-4 bg-body-tertiary">
                        <div className="card-body py-5">
                            <h5 className="card-title">App ufficiale di Hubby.</h5>
                            <p className="card-text">
                                Presto disponibile sul Play Store e Apple Store.
                            </p>
                            <a href="#" className="btn btn-outline-primary me-2 mb-2 mb-md-0 disabled" role="button">
                                <i className="bi bi-google-play"> Google Play</i>
                            </a>
                            <a href="#" className="btn btn-outline-primary disabled" role="button">
                                <i className="bi bi-apple"> Apple Store</i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container-fluid">
                    <h2 className="mb-4 text-center text-decoration-underline">Informazioni</h2>
                    <div className="row">
                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div className="card rounded-4 bg-body-tertiary">
                                <div className="card-body p-4">
                                    <i className="bi bi-controller rounded-circle p-2 fs-2 d-inline-flex bg-white text-primary"></i>
                                    <h4 className="mt-2 mb-3">Videogames</h4>
                                    <p className="text-body-tertiary">
                                        Paragraph of text beneath the heading to explain the heading. We'll add onto
                                        it with another sentence and probably just keep going until we run out of
                                        words.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
    )
}

export default Home;
