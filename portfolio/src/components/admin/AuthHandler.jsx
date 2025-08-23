import { useState, useEffect, useContext, createContext } from 'react';

// creates context for when authentication state is tracked
const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

