import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import Preloader from '@/Components/Partials/Preloader';

const AuthRoute = (props) => {

    const [auth, setAuth] = useState(null);
    const { user } = useSelector(state => state.auth);

    useEffect(() => {
        if(user){
            fetch('http://localhost:8000/auth', {
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
        }

    }, [user]);

    if (!user || auth === null) {
        return <Preloader show={true} />;
    }

    if (!auth) {
        return <Navigate to="/login" replace />;
    }

    return props.children;
}

export default AuthRoute;
