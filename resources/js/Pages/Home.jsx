import { Header } from "@/Components/Header";
import { Head, Link } from '@inertiajs/react';

export const Home = () => {
    return (<>
        <Head title="Home" />
        <div className="container">
            <Header />
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Centered hero</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Quickly design and customize responsive mobile-first sites with Bootstrap,
                        the world’s most popular front-end open source toolkit, featuring Sass
                        variables and mixins, responsive grid system, extensive prebuilt
                        components, and powerful JavaScript plugins.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                            Primary button
                        </button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                            Secondary
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-4 py-5" id="icon-grid">
                <h2 className="pb-2 border-bottom">Icon grid</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-5">
                    <div className="col d-flex align-items-start">
                        <svg
                            className="bi text-muted flex-shrink-0 me-3"
                            width="1.75em"
                            height="1.75em"
                        >
                            <use xlinkHref="#bootstrap" />
                        </svg>
                        <div>
                            <h4 className="fw-bold mb-0">Featured title</h4>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg
                            className="bi text-muted flex-shrink-0 me-3"
                            width="1.75em"
                            height="1.75em"
                        >
                            <use xlinkHref="#cpu-fill" />
                        </svg>
                        <div>
                            <h4 className="fw-bold mb-0">Featured title</h4>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg
                            className="bi text-muted flex-shrink-0 me-3"
                            width="1.75em"
                            height="1.75em"
                        >
                            <use xlinkHref="#calendar3" />
                        </svg>
                        <div>
                            <h4 className="fw-bold mb-0">Featured title</h4>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home;
