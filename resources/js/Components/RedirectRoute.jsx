import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getCsrfToken } from '@/Utils/api';
import Spinner from './Partials/Spinner';

const RedirectRoute = (props) => {

    const [url, setUrl] = useState(null);
    const { user } = useSelector(state => state.auth);
    const location = useLocation();

    useEffect(()=> {

        if (user) {
            fetch(location.pathname, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': getCsrfToken()
                }
            }).then(response => {
                if (response.status === 200) {
                    return response.json();
                }else{
                    window.alert(response.status);
                }
            }).then(data => {
                setUrl(data);
            })
            .catch(error => {
                console.error('Redirect failed:', error);
                setUrl('');
            });
        }
    }, [user])

    if (!user || url === null) {
        return <Spinner show={true}></Spinner>
    }

    if (url) {
        return <Navigate to={url} replace />;
    }

    return props.children;
}

export default RedirectRoute;
