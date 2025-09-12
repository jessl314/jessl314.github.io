import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './AuthHandler.js';

const AdminNavbar = () => {
    const { logout } = useAuth();
    const location = useLocation();

    const handleLogout = () => {
        logout();
    };

    const navItems = [
        { path: '/admin', label: 'Dashboard', icon: '📊' },
        { path: '/admin/projects', label: 'Manage Projects', icon: '💼' },
        { path: '/admin/about', label: 'Edit About', icon: '👤' },
        { path: '/admin/hero', label: 'Edit Hero', icon: '🎯' },
        { path: '/admin/settings', label: 'Settings', icon: '⚙️' },
    ];

    return (
        <div className="w-72 h-screen bg-gradient-to-br from-[#0e1712] to-[#1a2a22] text-white fixed left-0 top-0 z-50 border-r border-[#afcdbd]/20 shadow-2xl">
            {/* Header */}
            <div className="p-6 border-b border-[#afcdbd]/20">
                <h2 className="text-2xl font-bold text-[#afcdbd]">Admin Panel</h2>
                <p className="text-sm text-gray-400 mt-1">Portfolio Management</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-4 overflow-y-auto">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center px-6 py-3 text-gray-300 hover:bg-[#afcdbd]/10 hover:text-[#afcdbd] transition-all duration-200 border-l-4 border-transparent hover:border-[#afcdbd] ${
                            location.pathname === item.path 
                                ? 'bg-[#afcdbd]/15 text-[#afcdbd] border-[#afcdbd] font-semibold' 
                                : ''
                        }`}
                    >
                        <span className="text-xl mr-3 w-6 text-center">{item.icon}</span>
                        <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                ))}
            </nav>

            {/* Footer Actions */}
            <div className="p-4 border-t border-[#afcdbd]/20 space-y-2">
                <Link 
                    to="/" 
                    className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#afcdbd]/10 hover:text-[#afcdbd] transition-all duration-200 border-l-4 border-transparent hover:border-[#afcdbd] rounded-r-md"
                >
                    <span className="text-xl mr-3 w-6 text-center">🌐</span>
                    <span className="text-sm font-medium">View Portfolio</span>
                </Link>
                
                <button 
                    onClick={handleLogout} 
                    className="flex items-center w-full px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 border-l-4 border-transparent hover:border-red-500 rounded-r-md"
                >
                    <span className="text-xl mr-3 w-6 text-center">🚪</span>
                    <span className="text-sm font-medium">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default AdminNavbar;

