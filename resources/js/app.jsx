import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from "@/store";

import ThemeLayout from '@/Layouts/ThemeLayout.jsx';
import AuthLayout from "./Layouts/AuthLayout.jsx";
import AdminLayout from "@/Layouts/AdminLayout.jsx";

import AuthRoute from "./Components/AuthRoute";
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

import "../scss/theme.scss";
import Session from './Components/Session.jsx';

function App() {

    return (
        <>
        <Session>
            <Router>
                <Routes>
                    <Route element={<ThemeLayout></ThemeLayout>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/rank" element={<Rank />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/user/profile" element={<AuthRoute><Profile /></AuthRoute>} />
                        <Route path="/user/settings" element={<AuthRoute><UserSettings/></AuthRoute>} />
                    </Route>
                    <Route element={<AdminLayout></AdminLayout>}>
                        <Route path="/admin/dashboard" element={<AuthRoute><VerifiedRoute><Dashboard/></VerifiedRoute></AuthRoute>} />
                    </Route>
                    <Route path="/logout" element={<Logout />} />
                    <Route element={<AuthLayout></AuthLayout>}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/password-forgot" element={<PasswordForgot/>} />
                        <Route path="/password-reset/:token" element={<PasswordReset/>} />

                        <Route path="/password-confirm" element={<AuthRoute><PasswordConfirm/></AuthRoute>}/>
                        <Route path="/password-update" element={<AuthRoute><PasswordUpdate/></AuthRoute>}/>
                        <Route path="/email-verification-request" element={<AuthRoute><EmailVerificationRequest /></AuthRoute>} />
                        <Route path="/email-verification-request/:id/:hash" element={<AuthRoute><EmailVerificationRequest /></AuthRoute>} />
                    </Route>
                </Routes>
            </Router>
            </Session>
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
