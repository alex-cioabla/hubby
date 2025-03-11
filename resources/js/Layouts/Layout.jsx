import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { Head, usePage } from '@inertiajs/react';

export default function Layout(params) {
    const { translations, locale } = usePage().props;

    return (
        <div>
            <Head title="Home" />
            <Header translations={translations}/>
                <main className="container-fluid">
                    {params.children}
                </main>
            <Footer locale={locale}/>
        </div>
    );
}
