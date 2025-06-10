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
                                            <div className="title-animated w-100 text-center">
                                                <h6 className="rounded-pill d-inline-block px-3 py-2">2.4K Library</h6>
                                            </div>
                                        </div>
                                        <h6 className="mt-3"> Mario Rossi </h6>
                                        <p>249K Games</p>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <img src="storage/images/carousel_dummy.jpg" className="rounded-4" alt="carousel_pic" />
                                            <div className="title-animated w-100 text-center">
                                                <h6 className="rounded-pill d-inline-block px-3 py-2">2.4K Library</h6>
                                            </div>
                                        </div>
                                        <h6 className="mt-3"> Mario Rossi </h6>
                                        <p>249K Games</p>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <img src="storage/images/carousel_dummy.jpg" className="rounded-4" alt="carousel_pic" />
                                            <div className="title-animated w-100 text-center">
                                                <h6 className="rounded-pill d-inline-block px-3 py-2">2.4K Library</h6>
                                            </div>
                                        </div>
                                        <h6 className="mt-3"> Mario Rossi </h6>
                                        <p>249K Games</p>
                                    </div>
                                    <div className="item">
                                        <div className="thumb">
                                            <img src="storage/images/carousel_dummy.jpg" className="rounded-4" alt="carousel_pic" />
                                            <div className="title-animated w-100 text-center">
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
                                <div className="d-flex justify-content-between align-items-center pb-3 border-bottom">
                                    <span className="fw-bold">01</span>
                                    <img src="storage/images/avatar_dummy.jpg" className="img-thumbnail rounded-circle" alt="..." />
                                    <i className="bi bi-check-circle-fill"> Profile name</i>
                                    <a href="#" className="btn btn-primary">
                                        Follow
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
    )
}

export default Rank;

