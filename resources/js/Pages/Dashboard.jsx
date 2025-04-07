import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Dashboard = () => {

    document.title = "Dashboard - " + appConfig.name;

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>

            </div>
            <p>You're logged in!</p>
        </>
    );
}

export default Dashboard;
