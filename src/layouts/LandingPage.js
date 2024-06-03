import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import video from '../imgs/bgenaltacalida_1.mp4';

const MainLayout = () => {




    return (
        <>
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="content-overlay custom-cursor">
                <Outlet />
            </div>

        </>
    );
};

export default MainLayout;
