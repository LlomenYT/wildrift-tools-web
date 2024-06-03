import React from 'react';
import logo from '../imgs/main_logo.svg';



const HeaderMobile = () => {
    return (
        <div id="kt_app_header" className="app-header d-flex d-lg-none">
            <div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
                <div className="d-flex align-items-center ms-n2 me-2" title="Show sidebar menu">
                    <div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
                        <i className="ki-outline ki-abstract-14 fs-2"></i>
                    </div>
                </div>
                <div className="d-flex align-items-center me-auto">
                    <a href="/">
                        <img alt="Logo" src={logo} className="h-25px" />
                    </a>
                </div>

            </div>

            <div class="app-sidebar-menu d-flex flex-center overflow-hidden flex-column-fluid">

                <div id="kt_app_sidebar_menu_wrapper" class="app-sidebar-wrapper d-flex hover-scroll-overlay-y scroll-ms my-5" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu, #kt_app_sidebar" data-kt-scroll-offset="5px" style={{ height: '730px' }}>

                    <div class="
                menu 
                menu-column 
                menu-rounded   
                menu-active-bg 
                menu-title-gray-700  
                menu-arrow-gray-500 
                menu-icon-gray-500 
                menu-bullet-gray-500 
                menu-state-primary                
                my-auto 
            " id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
                        <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2"><span class="menu-link menu-center"><span class="menu-icon me-0"><i class="ki-outline ki-home fs-2x"></i></span></span><div class="menu-sub menu-sub-dropdown px-2 py-4 w-250px mh-75 overflow-auto"><div class="menu-item"><div class="menu-content "><span class="menu-section fs-5 fw-bolder ps-1 py-1">Home</span></div></div><div class="menu-item"><a class="menu-link" href="/keen/demo8/index.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Default</span></a></div><div class="menu-item"><a class="menu-link" href="/keen/demo8/dashboards/projects.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Projects</span></a></div><div class="menu-item"><a class="menu-link" href="/keen/demo8/dashboards/ecommerce.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">eCommerce</span></a></div><div class="menu-item"><a class="menu-link" href="/keen/demo8/dashboards/marketing.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Marketing</span></a></div><div class="menu-inner flex-column collapse " id="kt_app_sidebar_menu_dashboards_collapse"><div class="menu-item"><a class="menu-link" href="/keen/demo8/dashboards/social.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Social</span></a></div><div class="menu-item"><a class="menu-link" href="/keen/demo8/dashboards/bidding.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Bidding</span></a></div><div class="menu-item"><a class="menu-link" href="/keen/demo8/dashboards/online-courses.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Online Courses</span></a></div><div class="menu-item"><a class="menu-link" href="/keen/demo8/dashboards/logistics.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Logistics</span></a></div></div>
                            <div class="menu-item">
                                <div class="menu-content">
                                    <a class="btn btn-flex btn-color-gray-500 btn-icon-gray-500 d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_dashboards_collapse" data-kt-toggle-text="Show Less">
                                        <span data-kt-toggle-text-target="true">Show 4 More</span> <i class="ki-outline ki-minus-square toggle-on fs-2 me-0 pe-0"></i><i class="ki-outline ki-plus-square toggle-off fs-2 me-0 pe-0"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item py-2">
                            <span class="menu-link menu-center"><span class="menu-icon me-0">
                                <i class="ki-outline ki-notification-status fs-2x"></i>
                            </span></span>
                            <div class="menu-sub menu-sub-dropdown menu-sub-indention px-2 py-4 w-250px mh-75 overflow-auto">
                                <div class="menu-item">
                                    <div class="menu-content ">
                                        <span class="menu-section fs-5 fw-bolder ps-1 py-1">Pages</span>
                                    </div></div>
                                <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                    <span class="menu-link"><span class="menu-bullet">
                                        <span class="bullet bullet-dot"></span></span>
                                        <span class="menu-title">User Profile</span>
                                        <span class="menu-arrow"></span></span>
                                    <div class="menu-sub menu-sub-accordion">
                                        <div class="menu-item">
                                            <a class="menu-link" href="/keen/demo8/pages/user-profile/overview.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span>
                                                <span class="menu-title">Overview</span></a></div><div class="menu-item"><a class="menu-link" href="/keen/demo8/pages/user-profile/projects.html"><span class="menu-bullet">
                                                    <span class="bullet bullet-dot"></span></span>
                                                    <span class="menu-title">Projects</span></a>
                                        </div>
                                        <div class="menu-item"><a class="menu-link" href="/keen/demo8/pages/user-profile/campaigns.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Campaigns</span></a></div>
                                        <div class="menu-item"><a class="menu-link" href="/keen/demo8/pages/user-profile/documents.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Documents</span></a></div>
                                        <div class="menu-item"><a class="menu-link" href="/keen/demo8/pages/user-profile/followers.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Followers</span></a></div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HeaderMobile;
