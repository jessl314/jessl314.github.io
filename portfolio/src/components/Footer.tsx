import { Link } from 'react-router-dom';
import { useAuth } from './admin/AuthHandler.js';
import "./Footer.css"

const Footer = () => {
    const { isAuth, logout } = useAuth();
    
    const handleLogout = () => {
        logout();
    };
    
    return (
        <footer className="bg-[#1a2a22] text-white py-8 mt-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-300">
                            © 2024 Jessica's Portfolio. All rights reserved.
                        </p>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                        {isAuth ? (
                            <div className="flex items-center space-x-4">
                                <Link 
                                    to="/admin" 
                                    className="text-sm text-[#afcdbd] hover:text-white transition-colors duration-200"
                                >
                                    Admin Dashboard
                                </Link>
                                <button 
                                    onClick={handleLogout}
                                    className="text-sm text-gray-400 hover:text-red-400 transition-colors duration-200"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link 
                                to="/admin" 
                                className="text-sm bg-[#afcdbd] text-[#0e1712] px-4 py-2 rounded-md hover:bg-white transition-colors duration-200"
                            >
                                Admin Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
