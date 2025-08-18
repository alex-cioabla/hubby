const Spinner = ({show = false}) => {

    if (!show) { return null;}

    return (
        <div id="spinner" className="position-fixed z-1 bg-dark h-100 w-100">
            <div id="spinner" className="position-absolute top-50 start-50 translate-middle">
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Spinner;
