import { Outlet } from "react-router-dom";
import Preloader from "@/Components/Preloader";

export default function AuthLayout() {

    return (
        <>
            <Preloader></Preloader>
            <div className="main h-100 d-flex flex-column justify-content-center align-items-center">
                <Outlet />
            </div>
        </>
    )
}
