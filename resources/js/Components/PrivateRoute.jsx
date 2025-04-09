import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

const PrivateRoute = (props) => {
    const user = useSelector(state => state.auth.user);
    const { locale } = useSelector((state) => state.localization);
    let { lang } = useParams();

    lang = lang === locale ? lang : '';

    if (user){
        return (props.children);
    }

    return (<Navigate to={`${lang}/login`} replace />)
}

export default PrivateRoute;
