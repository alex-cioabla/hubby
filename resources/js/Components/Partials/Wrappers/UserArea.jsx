import ThemeLayout from "@/Layouts/ThemeLayout";
import AuthRoute from "@/Components/Middleware/AuthRoute";
import RoleRoute from "@/Components/Middleware/RoleRoute";

const UserArea = () => {

    return (
        <>
            <AuthRoute>
                <RoleRoute>
                    <ThemeLayout></ThemeLayout>
                </RoleRoute>

            </AuthRoute>
        </>
    )
}

export default UserArea;
