import React from 'react';

import '../../app.css'
import imgTop from '../../imgs/m4-bg-top.webp';
import FlagSelector from '../../components/flagSelector';
import { useLanguage } from '../../context/languageContext';

const UsuariosPage = () => {

    const { languageData } = useLanguage();


    return (
        <div className='d-flex flex-column min-vh-100 relative custom-cursor'>
            <img src={imgTop} style={{ height: '20vh', zIndex: -1 }} alt="" />
            <div className='d-flex flex-grow-1 flex-column justify-content-center align-items-start absolute top-0 w-full'>
                <div className="w-100 d-flex justify-content-between align-items-center">

                    <h1 className='text-2xl font-bold mt-4 p-5' style={{ fontSize: '2em' }}>{languageData.twrtools}</h1>
                    <div className="p-5">
                        <FlagSelector />
                    </div>
                </div>
                <h6 className=' font-bold p-5 col-5' >{languageData.subtlanding}</h6>
                <br /><br /><br />
                <div className='d-flex justify-content-center align-items-center  w-full'>
                    <div className='flex items-center justify-center'>
                        <div className='custom-card p-6 col-lg-12 col-9' style={{ transition: 'opacity 1s ease-in-out', opacity: '1' }}>
                            <h1 className='text-2xl text-white font-bold mb-4'>{languageData.tfarmeandooro}</h1>
                            <p className='mb-4 text-white'>{languageData.subtlategame}</p>
                            <p className='text-white'>{languageData.subtnovedades} <a href="https://x.com/LlomenYT" target='_blank' className='text-red-500 font-bold'>Llomen</a></p>
                        </div>

                        <div className="mt-10"></div>
                    </div>
                </div>
            </div>

            <footer className=' text-center py-3 mt-auto text-white '>
                <p>{languageData.footer1} <a href="https://x.com/LlomenYT" target='_blank' className='text-red-500 font-bold'>Llomen</a> © 2024 | {languageData.footer2}</p>
            </footer>
        </div>

    );

}

export default UsuariosPage;