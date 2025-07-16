import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSession } from '@/Store/authSlice';
import Preloader from '@/Components/Preloader';

const Session = (props) => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeSession = async () => {
            const hasStoredSession = document.cookie.includes('XSRF-TOKEN');

            if (!user && hasStoredSession) {
                try {
                    await dispatch(fetchSession());
                } catch (error) {
                    console.error('Errore durante il fetch della sessione:', error);
                }
                setLoading(false);
            }
        };

        initializeSession();

    }, [dispatch, user]);

    if (loading) {
        return (
            <Preloader show={true}/>
        );
    }

    return props.children;
};

export default Session;
