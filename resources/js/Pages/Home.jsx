import { useSelector } from "react-redux";

const Home = () => {

    document.title = "Home - " + appConfig.name;
    const theme = useSelector(state => state.theme.value);

    return (<>
        <section>
            <div className="bg-body-secondary p-5 mb-4 rounded-4" id="banner">
                <div className="container-fluid py-5">
                    <h5>Welcome To hubby</h5>
                    <h4 className="display-5 fw-bold mb-3 text-uppercase">Browse Our Popular <br /> Games Here</h4>
                    <button className="btn btn-primary" type="button">Browse now</button>
                </div>
            </div>
        </section>
        <section className="mt-5">
            <div className="container-fluid p-4 rounded-4 bg-body-secondary">
                <h2 className="mb-4">Category</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card border border-0 h-100 rounded-3 bg-body-tertiary">
                            <div className="card-body py-4 px-3">
                                <img src="storage/images/console_category.jpg" className="card-img-top rounded-5" alt="..." />
                                <h5 className="card-title mt-3">Console</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border border-0 h-100 rounded-3 bg-body-tertiary">
                            <div className="card-body py-4 px-3">
                                <img src="storage/images/console_category.jpg" className="card-img-top rounded-5" alt="..." />
                                <h5 className="card-title mt-3">Videogiochi</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mt-5">
            <div className="container-fluid p-4 rounded-4 bg-body-secondary">

                        <div className="card text-center text-bg-light">
                            <div className="card-body py-5">
                                <h5 className="card-title">Scarica l’App ufficiale di Subito.</h5>
                                <p className="card-text">
                                    Cerca tra migliaia di annunci e inserisci i tuoi, ovunque tu sia.
                                </p>
                                <a href="#" className="btn btn-outline-primary me-2">
                                    <i className="bi bi-google-play"> Disponibile su Google Play</i>
                                </a>
                                <a href="#" className="btn btn-outline-primary">
                                    <i className="bi bi-apple"> Scarica su Apple Store</i>
                                </a>
                            </div>
                        </div>

            </div>
        </section>
        <section className="mt-5">
            <div className="container-fluid">
                <h2 className="mb-4 text-center">Informazioni</h2>
                <div className="row">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card rounded-4 bg-body-tertiary">
                            <div className="card-body p-4">
                                <div className="icon d-inline-block bg-white rounded-circle p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={35}
                                        height={35}
                                        fill="currentColor"
                                        className="bi bi-controller"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z" />
                                        <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27" />
                                    </svg>


                                </div>
                                <h4 className="mt-2 mb-3">Videogames</h4>
                                <p>
                                    Paragraph of text beneath the heading to explain the heading. We'll add onto
                                    it with another sentence and probably just keep going until we run out of
                                    words.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card rounded-4 bg-body-tertiary">
                            <div className="card-body p-4">
                                <div className="icon d-inline-block bg-white rounded-circle p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={35}
                                        height={35}
                                        fill="currentColor"
                                        className="bi bi-controller"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z" />
                                        <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27" />
                                    </svg>


                                </div>
                                <h4 className="mt-2 mb-3">Videogames</h4>
                                <p>
                                    Paragraph of text beneath the heading to explain the heading. We'll add onto
                                    it with another sentence and probably just keep going until we run out of
                                    words.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3 mb-sm-0">
                        <div className="card rounded-4 bg-body-tertiary">
                            <div className="card-body p-4">
                                <div className="icon d-inline-block bg-white rounded-circle p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={35}
                                        height={35}
                                        fill="currentColor"
                                        className="bi bi-controller"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z" />
                                        <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27" />
                                    </svg>


                                </div>
                                <h4 className="mt-2 mb-3">Videogames</h4>
                                <p>
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
    </>
    )
}

export default Home;
