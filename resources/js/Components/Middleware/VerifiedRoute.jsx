import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import Spinner from '@/Components/Partials/Spinner';

const VerifiedRoute = (props) => {

    const [verified, setVerified] = useState(null);
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const [url_params] = useSearchParams();
    const verified_param = url_params.get('verified');

        useEffect(() => {

            if (user) {
                fetch('/verified', {
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
                    setVerified(data);
                    if (verified_param) {
                        navigate('/user/profile', { replace: true });
                    }
                })
                .catch(error => {
                    setVerified(false);
                });
            }
    }, [user]);


    if (verified === null) {
        return (
            <Spinner show={true} />
        );
    }

    if (!verified) {
        return <Navigate to="/email-verification-request" replace />;
    }

    return props.children;
};

export default VerifiedRoute;
