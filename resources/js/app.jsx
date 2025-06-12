import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery-ui";
import "./theme-assets/popup.js";

import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import store from "@/store";
import MainLayout from '@/Layouts/MainLayout.jsx';
import BackendLayout from "@/Layouts/BackendLayout.jsx";

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
import Profile from "./Pages/Profile/Profile.jsx";
import UserSettings from "./Pages/Profile/UserSettings.jsx";
import AuthenticationLayout from "./Layouts/AuthenticationLayout.jsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<MainLayout></MainLayout>}>
                        <Route path=":lang?/" element={<Home />} />
                        <Route path=":lang?/library" element={<Library />} />
                        <Route path=":lang?/rank" element={<Rank />} />
                        <Route path=":lang?/shop" element={<Shop />} />
                        <Route path=":lang?/profile" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
                        <Route path=":lang?/user-settings" element={<PrivateRoute><UserSettings/></PrivateRoute>}></Route>
                    </Route>
                    <Route element={<BackendLayout></BackendLayout>}>
                        <Route path=":lang?/dashboard" element={<PrivateRoute><VerifiedRoute><Dashboard/></VerifiedRoute></PrivateRoute>}></Route>
                    </Route>
                    <Route path="/logout" element={<Logout />} />
                    <Route element={<AuthenticationLayout></AuthenticationLayout>}>
                        <Route path=":lang?/login" element={<Login />} />
                        <Route path=":lang?/register" element={<Register />} />
                        <Route path=":lang?/password-forgot" element={<PasswordForgot/>} />
                        <Route path=":lang?/password-reset/:token" element={<PasswordReset/>} />

                        <Route path=":lang?/password-confirm" element={<PrivateRoute><PasswordConfirm/></PrivateRoute>}/>
                        <Route path=":lang?/password-update" element={<PrivateRoute><PasswordUpdate/></PrivateRoute>}/>
                        <Route path=":lang?/email-verification-request" element={<PrivateRoute><VerifiedRoute><EmailVerificationRequest /></VerifiedRoute></PrivateRoute>}></Route>
                        <Route path=":lang?/email-verification-request/:id/:hash" element={<PrivateRoute><EmailVerificationRequest /></PrivateRoute>}></Route>
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
