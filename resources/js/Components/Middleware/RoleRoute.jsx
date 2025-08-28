import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../Partials/Spinner";
import Error403 from "../Pages/Error403";

const RoleRoute = (props) => {

    const [role, setRole] = useState(null);
    const { user } = useSelector(state => state.auth);

    useEffect(() => {
        if (user) {
            fetch('/role', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                if (response.status === 200) {
                    setRole(true);
                }
                if (response.status === 401) {
                    setRole(false);
                }
            }).catch(error => {
                console.error('Verified role failed:', error);
                setRole(false);
            });
        }

    }, [user]);

    if (role === null || !user) {
        return (<Spinner show={true}></Spinner>)
    }

    if (!role) {
        return (<Error403/>)
    }

    return props.children;
}

export default RoleRoute;
