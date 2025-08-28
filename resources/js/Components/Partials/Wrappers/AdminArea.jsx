import AuthRoute from "@/Components/Middleware/AuthRoute";
import RoleRoute from "@/Components/Middleware/RoleRoute";
import AdminLayout from "@/Layouts/AdminLayout";

const AdminArea = () => {

    return (
        <>
            <AuthRoute>
                <RoleRoute>
                    <AdminLayout></AdminLayout>
                </RoleRoute>
            </AuthRoute>
        </>
    )
}

export default AdminArea;
