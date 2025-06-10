import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery-ui";
import "./theme-assets/popup.js";

import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import store from "@/store";
import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import PrivateRoute from "./Components/PrivateRoute";
import VerifiedRoute from "./Components/VerifiedRoute";

import Home from "./Pages/Home";
import Library from "./Pages/Library";
import Rank from "./Pages/Rank";
import Shop from "./Pages/Shop";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Auth/Login";
import Logout from "./Pages/Auth/Logout";
import PasswordForgot from "./Pages/Auth/PasswordForgot";
import PasswordReset from "./Pages/Auth/PasswordReset";
import Register from "./Pages/Auth/Register";
import EmailVerificationRequest from "./Pages/Auth/EmailVerificationRequest";
import PasswordConfirm from "./Pages/Auth/PasswordConfirm";
import PasswordUpdate from "./Pages/Profile/PasswordUpdate";
import Profile from "./Pages/Profile/Profile";

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
                        <Route path=":lang?/dashboard" element={<PrivateRoute><VerifiedRoute><Dashboard/></VerifiedRoute></PrivateRoute>}></Route>
                        <Route path=":lang?/profile" element={<PrivateRoute><Profile/></PrivateRoute>}></Route>
                    </Route>
                    <Route path=":lang?/login" element={<Login />} />
                    <Route path=":lang?/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path=":lang?/password-forgot" element={<PasswordForgot/>} />
                    <Route path=":lang?/password-reset/:token" element={<PasswordReset/>} />

                    <Route path=":lang?/password-confirm" element={<PrivateRoute><PasswordConfirm/></PrivateRoute>}/>
                    <Route path=":lang?/password-update" element={<PrivateRoute><PasswordUpdate/></PrivateRoute>}/>
                    <Route path=":lang?/email-verification-request" element={<PrivateRoute><VerifiedRoute><EmailVerificationRequest /></VerifiedRoute></PrivateRoute>}></Route>
                    <Route path=":lang?/email-verification-request/:id/:hash" element={<PrivateRoute><EmailVerificationRequest /></PrivateRoute>}></Route>
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
