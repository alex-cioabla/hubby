import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSession } from '@/Store/Slice/authSlice';
import Spinner from '@/Components/Partials/Spinner';

const Session = (props) => {
    const dispatch = useDispatch();
    const { user, authenticated } = useSelector(state => state.auth);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const initializeSession = async () => {

            if (authenticated && !user) {
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

    }, [dispatch, user, authenticated]);

    if (loading) {
        return (
            <Spinner show={true} />
        );
    }

    return props.children;
};

export default Session;
