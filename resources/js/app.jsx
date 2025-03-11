import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import React, { useState, useEffect } from "react";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

//Inertia è un package esterno che permette di renderizzare pagine create con framework frontend come react mettendolo in comunicazione con uno backend come laravel
//SETUP SIMIL STORE REDUX
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        //const [translations, setTranslations] = useState(props.initialPage.props.translations || {});

        // useEffect(() => {
        //     // Ogni volta che cambiano le props di Inertia, aggiorniamo le traduzioni
        //     setTranslations(props.initialPage.props.translations || {});
        // }, [props.initialPage.props.translations]);

        root.render(<App {...props} /*translations={translations}*/ />);
    },
    progress: {
        color: '#4B5563',
    },
});
