import { Link } from 'react-router-dom';
import { useAuth } from './AuthHandler.js';

const AdminNavbar = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="side-navbar">
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={handleLogout}>Logout</button>
            <hr />
            <Link to="/">
                View Portfolio
            </Link>
        </div>
    );
};

export default AdminNavbar;

