import { useSelector } from 'react-redux';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import { setVerified } from '@/Store/authSlice';
import { useDispatch } from "react-redux";

const PrivateRoute = (props) => {
    const { token } = useSelector(state => state.auth);
    const { locale } = useSelector((state) => state.localization);
    let { lang } = useParams();

    const [searchParams] = useSearchParams();
    const verified = searchParams.get('verified');
    const dispatch = useDispatch();

    lang = lang === locale ? lang : '';

    if (verified){
        dispatch(setVerified());

        const newUrl = window.location.pathname; // Mantieni solo il percorso senza query string
        window.history.replaceState(null, '', newUrl);
    }

    if (token){
        return (props.children);
    }

    return (<Navigate to={`${lang}/login`} replace />)
}

export default PrivateRoute;
