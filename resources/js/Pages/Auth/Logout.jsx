import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { useLogoutMutation } from '@/Store/authApi';
import { removeCredentials } from '@/Store/authSlice';

const Logout = () => {

    const [logout, {error, isLoading }] = useLogoutMutation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
      logout();
      dispatch(removeCredentials());

      navigate('/');
    }, [])
}

export default Logout;
