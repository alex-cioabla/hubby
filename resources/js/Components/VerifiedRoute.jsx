import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Preloader from '@/Components/Preloader';

const VerifiedRoute = (props) => {

    const [verified, setVerified] = useState(null);
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();

        useEffect(() => {

            if (user) {
                fetch('http://localhost:8000/verified', {
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
                    setVerified(data.response);
                    if (data.redirect) {
                        navigate(data.redirect, { replace: true });
                    }
                })
                .catch(error => {
                    setVerified(false);
                });
            }
    }, [user]);


    if (verified === null) {
        return (
            <Preloader show={true} />
        );
    }

    if (!verified) {
        return <Navigate to="/email-verification-request" replace />;
    }

    return props.children;
};

export default VerifiedRoute;
