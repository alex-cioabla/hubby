import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Preloader from '@/Components/Preloader';

const VerifiedRoute = (props) => {

    const [verified, setVerified] = useState(null);

        useEffect(() => {
            fetch('http://localhost:8000/verified', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if (response.status === '200') {
                    return response.json();
                }
                if (response.status === '401') {
                    return false;
                }
            })
            .then(data => {
                setVerified(data);
            })
            .catch(error => {
                console.error('Auth check failed:', error);
                setVerified(false);
            });
    }, []);

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
