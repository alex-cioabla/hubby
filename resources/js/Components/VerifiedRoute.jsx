import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { setVerified } from '@/Store/authSlice';
import { useDispatch } from "react-redux";

const VerifiedRoute = (props) => {
    const { locale } = useSelector((state) => state.localization);
    let { lang } = useParams();

    const [searchParams] = useSearchParams();
    const verified = searchParams.get('verified');
    const dispatch = useDispatch();

    lang = lang === locale ? lang : '';

    if (verified){
        dispatch(setVerified(true));

        const newUrl = window.location.pathname;
        window.history.replaceState(null, '', newUrl);
    }

    return (props.children);
}

export default VerifiedRoute;
