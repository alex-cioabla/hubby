import Preloader from "@/Components/Preloader";
import { Outlet } from "react-router-dom";

export default function AuthenticationLayout() {

    return (
        <>
            <Preloader></Preloader>
            <div className="main h-100 d-flex flex-column justify-content-center align-items-center">
                <Outlet />
            </div>
        </>
    )
}
