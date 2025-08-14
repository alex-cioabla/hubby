import RoleRoute from "@/Components/Middleware/RoleRoute";
import AdminLayout from "@/Layouts/AdminLayout";

const AdminArea = () => {

    return (
        <>
            <RoleRoute>
                <AdminLayout></AdminLayout>
            </RoleRoute>
        </>
    )
}

export default AdminArea;
