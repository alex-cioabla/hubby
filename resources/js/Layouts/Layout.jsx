import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { Head, Link, usePage } from '@inertiajs/react';

export default function Layout(props) {
    const { translations, locale } = usePage().props;

    return (
        <div>
            <Head title="Home" />
            <Header translations={translations}/>
                <main className="container-fluid">
                    {props.children}
                </main>
            <Footer locale={locale}/>
        </div>
    );
}
