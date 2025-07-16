import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { useLogoutMutation } from '@/Store/authApi';
import { removeSession } from '@/Store/authSlice';

const Logout = () => {

    const [logout, { isSuccess }] = useLogoutMutation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {

        if (isSuccess) {
            try {
                dispatch(removeSession());
                navigate('/');
            } catch (error) {
                console.error('Errore removeSession:', error);
            }
        }
    }, [isSuccess, dispatch, navigate]);

    useEffect(() => {
        logout();
    }, []);


    return null;
}

export default Logout;
