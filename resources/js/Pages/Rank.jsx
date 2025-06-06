
import { useSelector } from "react-redux";

export const Rank = () => {

    document.title = "Rank - " + appConfig.name;
    const theme = useSelector(state => state.theme.value);

    return (<>
        <section>
            <div className="container-fluid">
                <h2 className="mb-4">Collector's </h2>
                <div className="row">
                    <div className="col-sm-8 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">
                                    With supporting text below as a natural lead-in to additional content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">
                                    With supporting text below as a natural lead-in to additional content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
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

