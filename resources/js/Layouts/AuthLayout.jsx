import { Outlet } from "react-router-dom";
import Spinner from "@/Components/Partials/Spinner";

export default function AuthLayout() {

    return (
        <>
            <Spinner></Spinner>
            <div className="main h-100 d-flex flex-column justify-content-center align-items-center">
                <Outlet />
            </div>
        </>
    )
}
