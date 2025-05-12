


const Home = () => {

    document.title = "Home - "+appConfig.name;

    return (<>
            <section>
                <div className="container-fluid">
                    <div className="px-4 py-5 my-5 text-center">
                        <h1 className="display-5 fw-bold">Titolo 1</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                                    Bottone principale
                                </button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                                    Bottone secondario
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img
                                    src="/storage/images/home_img_1.png"
                                    className="d-block mx-lg-auto img-fluid"
                                    alt="Bootstrap Themes"
                                    width={700}
                                    height={500}
                                    loading="lazy"
                                />
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                                    Titolo 2
                                </h1>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                                        Bottone principale
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                                        Bottone secondario
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 py-5" id="icon-grid">
                        <h2 className="pb-2 border-bottom">Titolo 3</h2>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-5">
                            <div className="col d-flex align-items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.75em"
                                    height="1.75em"
                                    fill="currentColor"
                                    className="bi text-body-secondary flex-shrink-0 me-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
                                    <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
                                </svg>
                                <div>
                                    <h4 className="fw-bold mb-0">Sottotitolo 1</h4>
                                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.75em"
                                    height="1.75em"
                                    fill="currentColor"
                                    className="bi text-body-secondary flex-shrink-0 me-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
                                    <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
                                </svg>

                                <div>
                                    <h4 className="fw-bold mb-0">Sottotitolo 2</h4>
                                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.75em"
                                    height="1.75em"
                                    fill="currentColor"
                                    className="bi text-body-secondary flex-shrink-0 me-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
                                    <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
                                </svg>
                                <div>
                                    <h4 className="fw-bold mb-0">Sottotitolo 3</h4>
                                    <p>Paragraph of text beneath the heading to explain the heading.</p>
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
