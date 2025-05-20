import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

const PrivateRoute = (props) => {

    const { token } = useSelector(state => state.auth);
    const { locale } = useSelector((state) => state.localization);
    let { lang } = useParams();

    lang = lang === locale ? lang : '';

    if (token){

        return (props.children);
    }

    return (<Navigate to={`${lang}/login`} replace />);
}

export default PrivateRoute;
