import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import store from "@/store";
import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from "./Layouts/AuthenticatedLayout";

import PrivateRoute from "./Components/PrivateRoute";
import Home from '@/pages/Home';
import Library from "./Pages/Library";
import Rank from "./Pages/Rank";
import Shop from "./Pages/Shop";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Auth/Login";
import Logout from "./Pages/Auth/Logout";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<GuestLayout></GuestLayout>}>
                        <Route path=":lang?/" element={<Home />} />
                        <Route path=":lang?/library" element={<Library />} />
                        <Route path=":lang?/rank" element={<Rank />} />
                        <Route path=":lang?/shop" element={<Shop />} />
                    </Route>
                    <Route element={<AuthenticatedLayout></AuthenticatedLayout>}>
                        <Route path=":lang?/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
                    </Route>
                    <Route path=":lang?/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path=":lang?/forgot-password" element={<ForgotPassword/>} />
                    <Route path=":lang?/reset-password/:token" element={<ResetPassword/>} />
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
