import { Routes, Route} from "react-router-dom";
import DashboardHome from "../../components/admin/DashboardHome.js";
import AdminNavbar from "../../components/admin/AdminNavbar.js";
import ProtectedRoute from "../../components/admin/ProtectRoute.js";



const Dashboard = () => {
    return (
        <div className="dashboard-layout">
            <AdminNavbar/>
            <div className="dashboard-content">
                <Routes>
                    <Route path="/dashboard/*" element={
                        <ProtectedRoute>
                              <DashboardHome/>
                        </ProtectedRoute>
                        } />   
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard
