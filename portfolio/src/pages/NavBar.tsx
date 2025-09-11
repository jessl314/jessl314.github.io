import { useState, useRef } from 'react'
import { type RefObject } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/admin/AuthHandler.js';
import "./NavBar.css"

interface NavBarProps {
    scrollTo: (ref: RefObject<HTMLDivElement | null>) => void;
    refs: {
        heroRef: RefObject<HTMLDivElement | null>;
        aboutRef: RefObject<HTMLDivElement | null>;
        projectsRef: RefObject<HTMLDivElement | null>;
    };
}

const NavBar = ({ scrollTo, refs }: NavBarProps) => {
    const { isAuth, logout } = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        console.log('Logout clicked!');
        logout();
        // Use window.location for more reliable redirect
        window.location.href = '/';
    };
    
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow p-4 z-50 nav-bar">
            <ul className="flex space-x-4 justify-end nav-text">
                <li 
                className="cursor-pointer hover:text-[#afcdbd] transition-colors duration-200"
                onClick={() => scrollTo(refs.heroRef)}>Home</li>
                <li 
                className="cursor-pointer hover:text-[#afcdbd] transition-colors duration-200"
                onClick={() => scrollTo(refs.aboutRef)}>About</li>
                <li 
                className="cursor-pointer hover:text-[#afcdbd] transition-colors duration-200"
                onClick={() => scrollTo(refs.projectsRef)}>Projects</li>
                
                {/* Login/Admin Button */}
                <li className="cursor-pointer hover:text-[#afcdbd] transition-colors duration-200">
                    {isAuth ? (
                        <div className="flex items-center space-x-2">
                            <Link to="/admin" className="hover:text-[#afcdbd] transition-colors duration-200">
                                Admin
                            </Link>
                            <button 
                                onClick={handleLogout}
                                className="text-sm text-gray-500 hover:text-red-500 transition-colors duration-200"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/admin" className="hover:text-[#afcdbd] transition-colors duration-200">
                            Login
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;