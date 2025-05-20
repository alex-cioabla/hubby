import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setEmailVerifiedAt } from '@/Store/authSlice';

const VerifiedRoute = (props) => {

    const { user } = useSelector(state => state.auth);
    const [searchParams] = useSearchParams();
    const verified_url_param = searchParams.get('verified');
    const email_verified_at = new Date(user.email_verified_at);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        if (verified_url_param) {
            const newUrl = window.location.pathname;
            window.history.replaceState(null, '', newUrl);
            const newDate = new Date();
            dispatch(setEmailVerifiedAt(newDate));

            navigate('/dashboard');
        }

    if (!user.email_verified_at || isNaN(email_verified_at.getTime())) {

        navigate('/email-verification-request');
    }
    }, [verified_url_param,dispatch]);

    return (props.children);
}

export default VerifiedRoute;
