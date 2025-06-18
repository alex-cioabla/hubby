


export const Shop = () => {

    document.title = "Shop - " + appConfig.name;

    return (<>
        <div className="container mt-3 p-5 rounded-4 bg-body-tertiary">
            <section>
                <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                    <div className="card">
                        <div className="card-body">
                            <form className="row g-3 needs-validation" noValidate="">
                                <div className="col-md-4">
                                    <label htmlFor="shop-search" className="form-label">
                                        Cosa cerchi?
                                    </label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="bi bi-search"></i>
                                        </span>
                                        <input
                                            id="shop-search"
                                            type="text"
                                            className="form-control"
                                            placeholder="Videogiochi, console"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="shop-cat-search" className="form-label">
                                        In quale categoria?
                                    </label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="bi bi-boxes"></i>
                                        </span>
                                        <select className="form-select" id="shop-cat-search">
                                            <option defaultValue="">Tutte le categorie</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="shop-loc-search" className="form-label">
                                        Dove?
                                    </label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="bi bi-geo-alt-fill"></i>
                                        </span>
                                        <input
                                            id="shop-loc-search"
                                            type="text"
                                            className="form-control"
                                            placeholder="Comune, provincia o regione"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                    <div className="row g-3">
                        <div className="col-12 col-sm-3">
                            <div className="card card-clickable">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="bi bi-controller rounded-circle p-2 fs-2 d-inline-flex me-2 border bg-secondary"></i>
                                        <h4>Videogiochi</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3">
                            <div className="card card-clickable">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="bi bi-controller rounded-circle p-2 fs-2 d-inline-flex me-2 border bg-secondary"></i>
                                        <h4>Console</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                    <div className="card">
                        <div className="card-body">
                            <div className="row g-2">
                                <div className="col-12 col-lg-4">
                                    <img src="storage/images/shop_dummy_1.jpg" className="img-thumbnail" alt="..." />
                                </div>
                                <div className="col-12 col-lg-8 d-sm-flex justify-content-sm-between align-items-sm-center">
                                    <div>
                                        <h4> Comincia a guadagnare </h4>
                                        <p>
                                            Dai al tuo usato una seconda occasione: vendi quello che non usi più, subito.
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-primary fw-bold"
                                    >
                                        <i className="bi bi-plus-square fw-bold"><span className="ps-2">Inserisci annuncio</span></i>

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                    <div className="row align-items-center g-2">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img
                                src="storage/images/shop_dummy_2.jpg"
                                className="img-fluid"
                                alt="Bootstrap Themes"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-lg-6">
                            <p className="color-hb">Hubby</p>
                            <h4>
                                Second hand: l'online conquista il mercato
                            </h4>
                            <p className="lead">
                                L'economia dell'usato vale 27 miliardi
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
    )
}

export default Shop;

