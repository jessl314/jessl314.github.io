import { useState, useEffect, useContext, createContext, type ReactNode } from 'react';

interface AuthContextType {
    isAuth: boolean;
    isLoad: boolean;
    login: (token: string) => void;
    logout: (token: string) => void;
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

    // check for token on initial load
    useEffect(() => {
        const token = localStorage.getIten('token');
        if (token) {
            setIsAuth(true);
        }
        setIsLoad(false);
    }, []);

    // login/logout, setting token into local storage
    // or removing it
    // stores token while a user is logged in

    const login = (token: string) => {
        localStorage.getItem('token');
        setIsAuth(true);
    }

    const logout = (token: string) => {
        localStorage.removeItem('token');
        setIsAuth(false);
    }

    const value: AuthContextType = {
        isAuth,
        isLoad,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}


