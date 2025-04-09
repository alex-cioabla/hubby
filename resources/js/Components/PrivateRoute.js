import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    const user = useSelector(state => state.auth.user);

    if (user){
        return (props.children);
    }

    return (<Navigate to=':lang?/login' replace />)
}

export default PrivateRoute;
