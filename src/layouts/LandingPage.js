import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import video from '../imgs/bgenaltacalida_1.mp4';
import img from '../imgs/bg_fondo.webp';

const MainLayout = () => {

    const [canPlayVideo, setCanPlayVideo] = useState(true);

    useEffect(() => {
        const videoElement = document.createElement('video');

        const canPlayMp4 = videoElement.canPlayType('video/mp4');
        const canPlayWebM = videoElement.canPlayType('video/webm');
        const canPlayOgg = videoElement.canPlayType('video/ogg');

        if (canPlayMp4 || canPlayWebM || canPlayOgg) {
            setCanPlayVideo(true);
        }
    }, []);



    return (
        <>
            <div className="video-background">
                {canPlayVideo ? (
                    <video autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={img} alt="background" />
                )}
            </div>
            <div className="content-overlay custom-cursor">
                <Outlet />
            </div>

        </>
    );
};

export default MainLayout;
