import PasswordUpdate from './PasswordUpdate';
import UserDelete from './UserDelete';
import UserUpdate from './UserUpdate';

const UserSettings = () => {
    return (
        <>
            <UserUpdate />
            <PasswordUpdate />
            <UserDelete />
        </>
    );
}

export default UserSettings;
