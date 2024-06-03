
import { Navigate, useNavigate, Route, Routes } from 'react-router-dom';
import LandingPage from '../layouts/LandingPage';
import { useAuth, AuthProvider, ProtectedRoute } from '../context/authcontext';


import { CommonProvider } from '../context/commonContext';

import LandingContent from '../pages/landing/landingContent';
import Logout from '../pages/auth/logout';
import { LanguageProvider } from '../context/languageContext';


const MainRoutes = () => {

    return (
        //AUTHPROVIDER PARA CHECKEAR SI ESTÁ AUTENTICADO
        <CommonProvider>
            <LanguageProvider>

                <Routes>
                    <Route element={<LandingPage />}>
                        <Route path='/' element={<LandingContent />} />

                    </Route >
                    <Route path="/logout" element={<Logout />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="*" element={<Navigate to="/pentakill-to-the-server" />} />
                    {/* 
                    <Route path="unauthorized" element={<Unauthorized />} /> */}
                </Routes >
            </LanguageProvider>
        </CommonProvider >

    );




};

export default MainRoutes;
