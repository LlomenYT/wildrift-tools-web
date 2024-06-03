import React, { useContext, useEffect } from 'react';
import { useAuth } from '../../context/authcontext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Lógica de cierre de sesión
        const handleLogout = async () => {
            await auth.logout();
            navigate("/login");
        };

        // Llama a la función de cierre de sesión cuando el componente se monta
        handleLogout();
    }, [auth, navigate]);

    return (
        // Puedes mostrar un mensaje de cierre de sesión aquí si lo deseas
        <div>Cerrando sesión...</div>
    );
};

export default Logout;



