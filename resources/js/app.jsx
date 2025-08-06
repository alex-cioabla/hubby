import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from "@/store";

import GuestArea from './Components/Partials/GuestArea';
import UserArea from './Components/Partials/UserArea';
import AdminArea from './Components/Partials/AdminArea';
import AuthLayout from "./Layouts/AuthLayout";

import AuthRoute from "./Components/Middleware/AuthRoute";
import VerifiedRoute from "./Components/Middleware/VerifiedRoute";

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
import Profile from "./Pages/Profile/Profile";
import UserSettings from "./Pages/Profile/UserSettings";

import "../scss/theme.scss";
import Session from './Components/Session';
import RedirectRoute from './Components/RedirectRoute';

function App() {

    return (
        <>
            <Session>
                <Router>
                    <Routes>
                        <Route element={<GuestArea></GuestArea>}>
                            <Route path="/" element={<Home />} />
                            <Route path="/rank" element={<Rank />} />
                            <Route path="/shop" element={<Shop />} />
                        </Route>
                        <Route element={<UserArea></UserArea>}>
                            <Route path="/user/profile" element={
                                <AuthRoute>
                                    <VerifiedRoute>
                                        <Profile />
                                    </VerifiedRoute>
                                </AuthRoute>
                            } />
                            <Route path="/user/settings" element={
                                <AuthRoute>
                                    <VerifiedRoute>
                                        <UserSettings />
                                    </VerifiedRoute>
                                </AuthRoute>
                            } />
                        </Route>

                        <Route element={<AdminArea></AdminArea>}>
                            <Route path="/admin/dashboard" element={
                                <AuthRoute>
                                    <Dashboard />
                                </AuthRoute>
                            } />
                        </Route>
                        <Route path="/logout" element={<Logout />} />
                        <Route element={<AuthLayout></AuthLayout>}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/password-forgot" element={<PasswordForgot />} />
                            <Route path="/password-reset/:token" element={<PasswordReset />} />

                            <Route path="/password-confirm" element={<AuthRoute><PasswordConfirm /></AuthRoute>} />
                            <Route path="/password-update" element={<AuthRoute><PasswordUpdate /></AuthRoute>} />
                            <Route path="/email-verification-request" element={<AuthRoute><RedirectRoute><EmailVerificationRequest /></RedirectRoute></AuthRoute>} />
                            <Route path="/email-verification-request/:id/:hash" element={<AuthRoute><RedirectRoute><EmailVerificationRequest /></RedirectRoute></AuthRoute>} />
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
