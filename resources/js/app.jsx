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

import "../scss/hubby.scss";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<MainLayout></MainLayout>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/rank" element={<Rank />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/profile" element={<PrivateRoute><VerifiedRoute><Profile /></VerifiedRoute></PrivateRoute>}></Route>
                        <Route path="/user-settings" element={<PrivateRoute><UserSettings/></PrivateRoute>}></Route>
                    </Route>
                    <Route element={<BackendLayout></BackendLayout>}>
                        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
                    </Route>
                    <Route path="/logout" element={<Logout />} />
                    <Route element={<AuthenticationLayout></AuthenticationLayout>}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/password-forgot" element={<PasswordForgot/>} />
                        <Route path="/password-reset/:token" element={<PasswordReset/>} />

                        <Route path="/password-confirm" element={<PrivateRoute><PasswordConfirm/></PrivateRoute>}/>
                        <Route path="/password-update" element={<PrivateRoute><PasswordUpdate/></PrivateRoute>}/>
                        <Route path="/email-verification-request" element={<PrivateRoute><VerifiedRoute><EmailVerificationRequest /></VerifiedRoute></PrivateRoute>}></Route>
                        <Route path="/email-verification-request/:id/:hash" element={<PrivateRoute><EmailVerificationRequest /></PrivateRoute>}></Route>
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
