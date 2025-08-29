import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import Spinner from '@/Components/Partials/Spinner';

const AuthRoute = (props) => {

    const { remember } = useSelector(state => state.auth);
    const [auth, setAuth] = useState(null);

    useEffect(() => {
            fetch('/auth', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                if (response.status === 401) {
                    return false;
                }
            })
            .then(data => {
                setAuth(data);
            })
            .catch(error => {
                console.error('Auth check failed:', error);
                setAuth(false);
            });

    }, []);

    if (auth === null) {
        return <Spinner show={true} />;
    }

    if (!auth || (auth && !remember)) {
        return <Navigate to="/login" replace />;
    }

    return props.children;
}

export default AuthRoute;
