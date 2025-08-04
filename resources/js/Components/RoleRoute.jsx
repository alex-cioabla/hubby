import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Preloader from "./Preloader";
import Error403 from "./Error403";

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
                     return response.json();
                }
                setRole(false);
            }).catch(error => {
                setRole(false);
            });
        }

    }, [user]);

    if (role === null) {
        return (<Preloader show={true}></Preloader>)
    }

    if (!role) {
        // return <Navigate to="/error/403" replace />;
        return (<Error403/>)
    }

    return props.children;
}

export default RoleRoute;
