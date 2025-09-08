import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

export const Rank = () => {

    document.title = "Rank - " + appConfig.name;

    return (<>
        <div className="container mt-3 p-5 rounded-4 bg-body-tertiary">
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                            <div className="card p-4 border border-0 h-100 rounded-4">
                                <div className="card-body">
                                    <h2 className="card-title mb-3 text-decoration-underline">Collezionisti</h2>
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        navigation={true}
                                        //autoplay={{ delay: 2500, disableOnInteraction: false }}
                                        modules={[Navigation, Autoplay]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className="card border border-0">
                                                <img src="/storage/images/carousel_dummy.jpg" className="card-img  rounded-4" alt="carousel_pic" />
                                                <div className="card-img-overlay d-flex justify-content-center align-items-end">
                                                    <h4><span className="badge bg-body-tertiary text-primary rounded-pill title-animated">2.4K Library</span></h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>Slide 2</SwiperSlide>
                                        <SwiperSlide>Slide 3</SwiperSlide>
                                        <SwiperSlide>Slide 4</SwiperSlide>
                                        <SwiperSlide>Slide 5</SwiperSlide>
                                        <SwiperSlide>Slide 6</SwiperSlide>
                                        <SwiperSlide>Slide 7</SwiperSlide>
                                        <SwiperSlide>Slide 8</SwiperSlide>
                                        <SwiperSlide>Slide 9</SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card p-4 border border-0 h-100 rounded-4">
                                <div className="card-body">
                                    <h2 className="card-title mb-4">Collezionisti <span className="text-decoration-underline">Top</span></h2>
                                    <ul className="ps-0">
                                        <li className="d-flex justify-content-between align-items-center pb-3 border-bottom">
                                            <span className="fw-bold">01</span>
                                            <img src="/storage/images/avatar_dummy.jpg" className="img-thumbnail rounded-circle" alt="..." />
                                            <i className="bi bi-check-circle-fill text-primary"> Nome profilo</i>
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
                    <h2 className="mb-4 text-decoration-underline">Collezioni</h2>
                    <div className="row mb-4">
                        <div className="col-12 col-sm-3">
                            <div className="card border border-0">
                                <img src="/storage/images/rank_dummy.jpg" className="card-img" alt="..." />
                                <div className="card-img-overlay d-flex flex-column ">
                                    <p className="mb-auto align-self-end"><span className="badge rounded-pill text-bg-primary bagde-animated">Online</span></p>
                                    <p className="align-self-center">
                                        <span className="badge rounded-pill text-bg-primary me-3 bagde-animated"><i className="bi bi-eye-fill"> 1.2K</i></span>
                                        <span className="badge rounded-pill text-bg-primary bagde-animated"><i className="bi bi-dpad-fill"> Games</i></span>

                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start mt-3">
                                <img src="/storage/images/avatar_dummy.jpg" className="img-thumbnail rounded-circle me-2" alt="..." />
                                <div>
                                    <i className="bi bi-check-circle-fill text-primary"> Nome profilo</i>
                                    <h5>La più bella collezione</h5>
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
        </div>
    </>
    )
}

export default Rank;

