const Dashboard = () => {

    document.title = "Dashboard - " + appConfig.name;

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>

            </div>
            <p>Sei autenticato!</p>
        </>
    );
}

export default Dashboard;
