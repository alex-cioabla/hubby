import { Outlet } from "react-router-dom";

export default function AuthLayout() {

    return (
        <>
            <div className="main h-100 d-flex flex-column justify-content-center align-items-center">
                <Outlet />
            </div>
        </>
    )
}
