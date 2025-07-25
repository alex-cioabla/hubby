import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSession } from '@/Store/authSlice';
import Preloader from '@/Components/Preloader';

const Session = (props) => {
    const dispatch = useDispatch();
    const { user, status } = useSelector(state => state.auth);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const initializeSession = async () => {

            if (status === 'authenticated' && !user) {
                setLoading(true);

                try {
                    await dispatch(fetchSession());
                    setLoading(false);

                } catch (error) {
                    console.error('Errore durante il fetch della sessione:', error);
                }
            }
        };

        initializeSession();

    }, [dispatch, user, status]);

    if (loading) {
        return (
            <Preloader show={true} />
        );
    }

    return props.children;
};

export default Session;
