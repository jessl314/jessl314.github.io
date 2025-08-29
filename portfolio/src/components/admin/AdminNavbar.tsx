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
                <a
                    href=" https://jessl314.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Portfolio
                </a>
        </div>
    );
};

export default AdminNavbar;
