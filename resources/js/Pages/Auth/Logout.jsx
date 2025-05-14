import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { useLogoutMutation } from '@/Store/authApi';
import { removeSession } from '@/Store/authSlice';

const Logout = () => {

    const [logout] = useLogoutMutation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
      logout();
      dispatch(removeSession());

      navigate('/');
    }, [])
}

export default Logout;
