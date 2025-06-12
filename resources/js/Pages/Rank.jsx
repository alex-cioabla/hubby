import OwlCarousel from 'react-owl-carousel';

export const Rank = () => {

    document.title = "Rank - " + appConfig.name;

    const options = {
        dots: false,
        nav: true,
        // autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 3
            },
            1800: {
                items: 3
            }
        }
    }

    return (<>
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8 mb-3 mb-sm-0">
                        <div className="card p-4 border border-0 h-100 rounded-4">
                            <div className="card-body">
                                <h2 className="card-title mb-3">Collector's</h2>
                                <OwlCarousel className='owl-theme' {...options}>
                                    <div className="item">
                                        <div className="thumb">
                                            <img src="storage/images/carousel_dummy.jpg" className="rounded-4" alt="carousel_pic" />
                                            <div className="title-animated w-100 text-center color-hb">
                                                <h6 className="rounded-pill d-inline-block px-3 py-2">2.4K Library</h6>
                                            </div>
                                        </div>
                                        <h6 className="mt-3"> Mario Rossi </h6>
                                        <p>249K Games</p>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <img src="storage/images/carousel_dummy.jpg" className="rounded-4" alt="carousel_pic" />
                                            <div className="title-animated w-100 text-center color-hb">
                                                <h6 className="rounded-pill d-inline-block px-3 py-2">2.4K Library</h6>
                                            </div>
                                        </div>
                                        <h6 className="mt-3"> Mario Rossi </h6>
                                        <p>249K Games</p>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <img src="storage/images/carousel_dummy.jpg" className="rounded-4" alt="carousel_pic" />
                                            <div className="title-animated w-100 text-center color-hb">
                                                <h6 className="rounded-pill d-inline-block px-3 py-2">2.4K Library</h6>
                                            </div>
                                        </div>
                                        <h6 className="mt-3"> Mario Rossi </h6>
                                        <p>249K Games</p>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <img src="storage/images/carousel_dummy.jpg" className="rounded-4" alt="carousel_pic" />
                                            <div className="title-animated w-100 text-center color-hb">
                                                <h6 className="rounded-pill d-inline-block px-3 py-2">2.4K Library</h6>
                                            </div>
                                        </div>
                                        <h6 className="mt-3"> Mario Rossi </h6>
                                        <p>249K Games</p>
                                    </div>

                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card p-4 border border-0 h-100 rounded-4">
                            <div className="card-body">
                                <h2 className="card-title mb-4">Top Collector's</h2>
                                <ul className="ps-0">
                                    <li className="d-flex justify-content-between align-items-center pb-3 border-bottom">
                                        <span className="fw-bold">01</span>
                                        <img src="storage/images/avatar_dummy.jpg" className="img-thumbnail rounded-circle" alt="..." />
                                        <i className="bi bi-check-circle-fill"> Profile name</i>
                                        <button type="button" className="btn btn-primary">
                                            Follow
                                        </button>
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
                <h2 className="mb-4">Category</h2>
                <div className="row">
                    <div className="col-12 col-sm-3">
                        <div className="card border border-0 h-100">
                            <div className="thumb position-relative">
                                <img src="storage/images/rank_dummy.jpg" className="card-img-top rounded-4" alt="..."></img>
                                <span className="badge rounded-pill text-bg-primary position-absolute top-0 end-0 m-3 bagde-animated">Online</span>
                                <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 text-center p-3">
                                    <span className="badge rounded-pill text-bg-primary me-3 bagde-animated"><i className="bi bi-eye-fill"> 1.2K</i></span>
                                    <span className="badge rounded-pill text-bg-primary bagde-animated"><i className="bi bi-dpad-fill"> Games</i></span>
                                </div>
                            </div>
                            <div className="card-body py-3 px-0">
                                <div className="d-flex align-items-start">
                                    <img src="storage/images/avatar_dummy.jpg" className="img-thumbnail rounded-circle me-2" alt="..." />
                                    <div>
                                        <i className="bi bi-check-circle-fill"> Profile name</i>
                                        <h5>La più bella collezione</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3">
                        <div className="card border border-0 h-100">
                            <img src="storage/images/rank_dummy.jpg" className="card-img-top rounded-4" alt="..."></img>
                            <div className="card-body py-3 px-0">
                                <div className="d-flex align-items-start">
                                    <img src="storage/images/avatar_dummy.jpg" className="img-thumbnail rounded-circle me-2" alt="..." />
                                    <div>
                                        <i className="bi bi-check-circle-fill"> Profile name</i>
                                        <h5>La più bella collezione</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3">
                        <div className="card border border-0 h-100">
                            <img src="storage/images/rank_dummy.jpg" className="card-img-top rounded-4" alt="..."></img>
                            <div className="card-body py-3 px-0">
                                <div className="d-flex align-items-start">
                                    <img src="storage/images/avatar_dummy.jpg" className="img-thumbnail rounded-circle me-2" alt="..." />
                                    <div>
                                        <i className="bi bi-check-circle-fill"> Profile name</i>
                                        <h5>La più bella collezione</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3">
                        <div className="card border border-0 h-100">
                            <img src="storage/images/rank_dummy.jpg" className="card-img-top rounded-4" alt="..."></img>
                            <div className="card-body py-3 px-0">
                                <div className="d-flex align-items-start">
                                    <img src="storage/images/avatar_dummy.jpg" className="img-thumbnail rounded-circle me-2" alt="..." />
                                    <div>
                                        <i className="bi bi-check-circle-fill"> Profile name</i>
                                        <h5>La più bella collezione</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row mt-n4">
                <div className="col-12 text-center">
                    <button type="button" className="btn btn-primary">Carica più collezionisti</button>
                </div>
            </div>
        </section>

    </>
    )
}

export default Rank;

