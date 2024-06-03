import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import HeaderMobile from '../components/headerMobile';
import NavBarVertical from '../components/navBarVertical';


const MainLayout = () => {




    return (
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
            <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
                <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">

                </div>
            </div>

            <div className="video-background">
                <video autoPlay muted loop playsInline >
                    <source src="src/imgs/bgenaltacalida_1.mp4" type="video/mp4" />
                </video>
            </div>






            <div className="content app-main flex-column flex-row-fluid" id="kt_app_main">
                <Outlet />
                {/*------ Main Routes ------*/}
            </div>
        </div>


    );
};

export default MainLayout;
