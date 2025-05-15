import PasswordUpdate from './PasswordUpdate';
import UserDelete from './UserDelete';
import UserUpdate from './UserUpdate';

const Profile = () => {
    return (<>
        <h2 className="fw-bolder fs-5 text-muted">
            Profilo
        </h2>
        <div className="py-12">
            <UserUpdate />

            <PasswordUpdate />

            <UserDelete/>

        </div>
    </>
    );
}

export default Profile;
