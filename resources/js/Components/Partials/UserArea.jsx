import ThemeLayout from "@/Layouts/ThemeLayout";
import RoleRoute from "@/Components/Middleware/RoleRoute";

const UserArea = () => {

    return (
        <>
            <RoleRoute>
                <ThemeLayout></ThemeLayout>
            </RoleRoute>
        </>
    )
}

export default UserArea;
