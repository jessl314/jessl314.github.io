import { Routes, Route} from "react-router-dom";
import DashboardHome from "../../components/admin/DashboardHome.js";
import AdminNavbar from "../../components/admin/AdminNavbar.js";
import ProtectedRoute from "../../components/admin/ProtectRoute.js";
import HeroAdmin from "./HeroAdmin.js";
import AboutAdmin from "./AboutAdmin.js";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <AdminNavbar/>
            <div className="ml-72 p-8">
                <Routes>
                    <Route path="/" element={
                        <ProtectedRoute>
                            <DashboardHome/>
                        </ProtectedRoute>
                    } />
                    <Route path="/hero" element={
                        <ProtectedRoute>
                            <HeroAdmin/>
                        </ProtectedRoute>
                    } />
                    <Route path="/about" element={
                        <ProtectedRoute>
                            <AboutAdmin/>
                        </ProtectedRoute>
                    } />
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard
