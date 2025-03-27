import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseLayout from '@/Layouts/BaseLayout';
import store from "@/store";
import Home from '@/pages/Home';
import Library from "./Pages/Library";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<BaseLayout></BaseLayout>}>
                    <Route path=":lang?/" element={<Home />} />
                    <Route path=":lang?/library" element={<Library />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
