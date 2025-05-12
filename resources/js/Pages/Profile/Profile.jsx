import PasswordUpdate from './PasswordUpdate';
import UserDelete from './UserDelete';
import UserUpdate from './UserUpdate';

const Profile = ({ mustVerifyEmail, status }) => {
    return (<>
        <h2 className="fw-bolder fs-5 text-muted">
            Profilo
        </h2>
        <div className="py-12">
            <UserUpdate
                mustVerifyEmail={mustVerifyEmail}
                status={status}
                className="max-w-xl"
            />

            <PasswordUpdate />

            <UserDelete/>

        </div>
    </>
    );
}

export default Profile;
