import UpdatePasswordForm from './PasswordUpdate';
import DeleteUserForm from './UserDelete';
import UpdateProfileInformationForm from './UserUpdate';

const Profile = ({ mustVerifyEmail, status }) => {
    return (<>
        <h2 className="fw-bolder fs-5 text-muted">
            Profile
        </h2>
        <div className="py-12">
            <UpdateProfileInformationForm
                mustVerifyEmail={mustVerifyEmail}
                status={status}
                className="max-w-xl"
            />

            <UpdatePasswordForm />

            <DeleteUserForm/>

        </div>
    </>
    );
}

export default Profile;
