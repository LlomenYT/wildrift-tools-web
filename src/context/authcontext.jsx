import React, { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// Crea el contexto de autenticación
export const AuthContext = createContext();

const saveSession = (userSession) => {
    localStorage.setItem("userSession", JSON.stringify(userSession));
};

const retrieveSession = () => {
    const session = localStorage.getItem("userSession");
    return JSON.parse(session) ?? null;
};

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [authData, setAuthData] = useState({
        isAuthenticated: false,
        idToken: null,
        accessToken: null,
        sessionToken: null,
    });

    const login = (idToken, accessToken, sessionToken) => {
        const userSession = {
            isAuthenticated: true,
            idToken,
            accessToken: accessToken,
            sessionToken: sessionToken,
        };
        setAuthData(userSession);
        saveSession(userSession);
    };

    //DENTRO DE CADA PÁGINA SE COGE LA SESIÓN CON ESTE MÉTODO,
    //SI NO TIENE SESIÓN REDIRECCIONA A LOGIN
    const getLoggedSession = () => {
        //WARNING: NO USAR NAVIGATE Y USAR OTRO COMPONENTE PARA COMPROBAR SI TIENE SESSION TOKEN (PRODUCCION O PRODUCTO CLIENTE, PARA DEBUG SE DEJA ASI)
        return authData.isAuthenticated
            ? authData
            : retrieveSession() ?? navigate(`/login?redirect=${location.pathname}`);
    };

    const logout = () => {
        setAuthData({
            isAuthenticated: false,
            idToken: null,
        });
        localStorage.removeItem("userSession");
    };

    return (
        <AuthContext.Provider value={{ getLoggedSession, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
