import React, { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setEmailVerifiedAt } from '@/Store/authSlice';

const VerifiedRoute = (props) => {

    const { user } = useSelector(state => state.auth);
    const [searchParams] = useSearchParams();
    const verified_url_param = searchParams.get('verified');
    const dispatch = useDispatch();

    useEffect(() => {
        if (verified_url_param) {
            const newUrl = window.location.pathname;
            window.history.replaceState(null, '', newUrl);

            dispatch(setEmailVerifiedAt(new Date()));
        }
    }, [verified_url_param, dispatch]);


    const email_verified_at = new Date(user.email_verified_at);
    if (isNaN(email_verified_at.getTime())) {
        return (<Navigate to={'/email-verification-request'} replace />);
    }

    return (props.children);
}

export default VerifiedRoute;
