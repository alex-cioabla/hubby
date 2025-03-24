import { Outlet } from "react-router-dom";
import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header";

export default function BaseLayout() {

    return (
        <div>
            <Header />
                <main className="container-fluid">
                    <Outlet />
                </main>
            <Footer/>
        </div>
    );
}
