import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { usePage } from '@inertiajs/react';

export default function Layout({ children, props }) {

    const { translations } = usePage().props;

    return (
        <div>
            <Header translations={translations} />
                <main className="container-fluid">
                    {children}
                </main>
            <Footer />
        </div>
    );
}
