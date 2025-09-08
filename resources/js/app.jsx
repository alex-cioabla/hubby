import "../scss/theme.scss";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from "@/Store/store";

import GuestArea from './Components/Partials/Wrappers/GuestArea';
import UserArea from './Components/Partials/Wrappers/UserArea';
import AdminArea from './Components/Partials/Wrappers/AdminArea';
import AuthLayout from "./Layouts/AuthLayout";

import AuthRoute from "./Components/Middleware/AuthRoute";
import VerifiedRoute from "./Components/Middleware/VerifiedRoute";
import Session from './Components/Session';
import RedirectRoute from './Components/RedirectRoute';
import Spinner from './Components/Partials/Spinner';

import Home from "./Pages/Home";
import Rank from "./Pages/Rank";
import Shop from "./Pages/Shop";

import Profile from "./Pages/User/Profile";
import UserSettings from "./Pages/User/UserSettings";
import Library from './Pages/User/Library';

import Dashboard from "./Pages/Dashboard";
import Categories from './Pages/Admin/Categories';

import Login from "./Pages/Auth/Login";
import Logout from "./Pages/Auth/Logout";
import Register from "./Pages/Auth/Register";
import PasswordForgot from "./Pages/Auth/PasswordForgot";
import PasswordReset from "./Pages/Auth/PasswordReset";
import PasswordConfirm from "./Pages/Auth/PasswordConfirm";
import PasswordUpdate from "./Pages/User/PasswordUpdate";
import EmailVerificationRequest from "./Pages/Auth/EmailVerificationRequest";

import { PopupProvider } from './Hooks/Popup';


function App() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const toggleSpinner = () => {
            setLoading(true);
        };

        if (document.readyState === "complete") {
            toggleSpinner();
        } else {
            window.addEventListener('load', toggleSpinner);
        }

        return () => {
            window.removeEventListener('load', toggleSpinner);
        };
    }, []);

    return (
       <>
            <Spinner show={!loading} />
            <PopupProvider>
                <Router>
                    <Routes>
                        <Route element={<Session><GuestArea /></Session>}>
                            <Route path="/" element={<Home />} />
                            <Route path="/rank" element={<Rank />} />
                            <Route path="/shop" element={<Shop />} />
                        </Route>

                        <Route element={<Session><UserArea /></Session>}>
                            <Route path="/user/profile" element={<VerifiedRoute><Profile /></VerifiedRoute>} />
                            <Route path="/user/settings" element={<VerifiedRoute><UserSettings /></VerifiedRoute>} />
                            <Route path="/user/library" element={<VerifiedRoute><Library /></VerifiedRoute>} />
                        </Route>

                        <Route element={<Session><AdminArea /></Session>}>
                            <Route path="/admin/dashboard" element={<Dashboard />} />
                            <Route path="/admin/categories" element={<Categories />} />
                        </Route>

                        <Route element={<Session><AuthLayout /></Session>}>
                            <Route path="/logout" element={<AuthRoute><Logout /></AuthRoute>} />
                            <Route path="/password-confirm" element={<AuthRoute><PasswordConfirm /></AuthRoute>} />
                            <Route path="/password-update" element={<AuthRoute><PasswordUpdate /></AuthRoute>} />
                            <Route path="/email-verification-request" element={<AuthRoute><RedirectRoute><EmailVerificationRequest /></RedirectRoute></AuthRoute>} />
                        </Route>

                        <Route element={<AuthLayout />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/password-forgot" element={<PasswordForgot />} />
                        </Route>

                        {/*Link esterni*/}
                        <Route element={<AuthLayout />}>
                            <Route path="/password-reset/:token" element={<PasswordReset />} />
                            <Route path="/email-verification-request/:id/:hash" element={<AuthRoute><RedirectRoute><EmailVerificationRequest /></RedirectRoute></AuthRoute>} />
                        </Route>
                    </Routes>
                </Router>
            </PopupProvider>
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
