import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getCsrfToken } from '@/Utils/api';
import Spinner from './Partials/Spinner';
import Toast from '@/Components/Partials/Toast';

const RedirectRoute = (props) => {

    const [url, setUrl] = useState(null);
    //const { user } = useSelector(state => state.auth);
    const location = useLocation();
    const [toast, setToast] = useState({
        show: false,
        message: '',
        type: ''
    });

    useEffect(() => {

        //if (user) {
        fetch(location.pathname, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': getCsrfToken()
            }
        }).then(response => response.json())
            .then(data => {
                setUrl(data);

                if (data.message) {
                    setUrl('');
                    setToast({
                        show: true,
                        message: data.message,
                        type: 'error'
                    });
                }

            })
            .catch(error => {
                console.error('Redirect failed:', error);
                setUrl('');
            });
        //}
    }, [/*user*/])

    if (url === null /*&& || !user*/) {
        return <Spinner />
    }

    if (url) {
        return <Navigate to={url} replace />;
    }

    return (
        <>
            <Toast
                show={toast.show}
                message={toast.message}
                type={toast.type}
            ></Toast>
            {props.children}
        </>)
}


export default RedirectRoute;
