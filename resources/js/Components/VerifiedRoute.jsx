import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const VerifiedRoute = (props) => {

    const { user } = useSelector(state => state.auth);
    const [searchParams] = useSearchParams();
    const verified_url_param = searchParams.get('verified');

    if (verified_url_param) {
        const email_verified_at = new Date(user.email_verified_at);
        const newUrl = window.location.pathname;

        window.history.replaceState(null, '', newUrl);
    }else{
        const email_verified_at = new Date(user.email_verified_at);
        if (isNaN(email_verified_at.getTime())) {
            return (<Navigate to={'/email-verification-request'} replace />);
        }
    }

    return (props.children);
}

export default VerifiedRoute;
