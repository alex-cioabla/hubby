import PasswordUpdate from './PasswordUpdate';
import UserDelete from './UserDelete';
import UserUpdate from './UserUpdate';

const UserSettings = () => {
    return (
        <>
        <div className="container-fluid">
            <UserUpdate />
            <PasswordUpdate />
            <UserDelete />
        </div>
        </>
    );
}

export default UserSettings;
