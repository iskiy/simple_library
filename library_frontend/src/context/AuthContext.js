import {createContext, useState, useEffect } from 'react';
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ isAuthenticated: false, isAdmin: false })

    useEffect(() => {
        const role = Cookies.get('role');
        updateAuth(role)
    }, []);

    function updateAuth(role){
        if(role) {
            let isAdmin = false
            if (role === 'admin') {
                isAdmin = true
            }
            setAuth({isAuthenticated: true, isAdmin: isAdmin})
        }
    }
    const login = (role) => {
        updateAuth(role)
    };

    const logout = () => {
        const cookies = Cookies.get();
        for (const cookie in cookies) {
            console.log(cookie)
            Cookies.remove(cookie);
        }
        setAuth({ isAuthenticated: false, isAdmin: false });
    };

    return (
        <AuthContext.Provider value={{auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;