import { useState, useEffect, useContext, createContext, type ReactNode } from 'react';

interface User {
    id: string;
    username: string;
}
interface AuthContextType {
    isAuth: boolean;
    isLoad: boolean;
    isLoggingOut: boolean; // Add this
    login: (token: string, user?: User) => void;
    logout: () => void;
    register: (username: string, password: string) => Promise<void>;
}

// creates context for when authentication state is tracked
export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context ;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoad, setIsLoad] = useState(true);
    const [isLoggingOut, setIsLoggingOut] = useState(false); // Add this
    const [user, setUser] = useState<User | null>(null);

    // check for token on initial load
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuth(true);
        }
        setIsLoad(false);
    }, []);

    // login/logout, setting token into local storage
    // or removing it
    // stores token while a user is logged in

    const login = (token: string, user?: User) => {
        localStorage.setItem('token', token);
        setIsAuth(true);
        if (user) setUser(user);
    }

    const logout = () => {
        setIsLoggingOut(true); // Set logging out state
        localStorage.removeItem('token');
        setIsAuth(false);
        setUser(null);
        // Force redirect to portfolio
        window.location.href = '/';
    }

    const register = async (username: string, password: string) => {
    const res = await fetch("https://jesslpersonalwebsite.onrender.com/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      throw new Error("Registration failed");
    }

    const data = await res.json();
    // API returns { token }
    login(data.token);
    };

    const value: AuthContextType = {
        isAuth,
        isLoad,
        isLoggingOut,
        login,
        logout,
        register,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}


