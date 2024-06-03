import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../imgs/main_logo.svg';
import { useLocation } from 'react-router-dom';

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const NavBarVertical = () => {

    const location = useLocation();
    const currentRoute = location.pathname;
    return (

        <>

            <div className="app-header" id="kt_app_header"  >
                <div className="app-header-primary w-100" data-kt-sticky="true" data-kt-sticky-name="app-header-primary-sticky" >


                    <div className="app-container  container-xxl d-flex align-items-stretch justify-content-between " id="kt_app_header_primary_container">

                        <div className="d-flex flex-grow-1 flex-lg-grow-0">

                            <div className="d-flex align-items-center me-7" id="kt_app_header_logo_wrapper">

                                <button className="d-lg-none btn btn-icon btn-color-white btn-active-color-primary w-35px h-35px ms-n2 me-2" id="kt_app_header_menu_toggle">
                                    <i className="ki-duotone ki-abstract-14 fs-2"><span className="path1"></span><span className="path2"></span></i>        </button>



                                <a href="/keen/demo9/index.html" className="d-flex align-items-center">

                                </a>

                            </div>




                            <div className="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="{default: 'append', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">

                                <div className=" menu  
                                menu-rounded 
                                menu-active-bg 
                                menu-state-primary 
                                menu-column 
                                menu-lg-row 
                                menu-title-gray-700 
                                menu-icon-gray-500 
                                menu-arrow-gray-500 
                                menu-bullet-gray-500 
                                my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0
                                " id="kt_app_header_menu" data-kt-menu="true">
                                    <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2"><span className="menu-link py-3"><span className="menu-title">Dashboards</span><span className="menu-arrow d-lg-none"></span></span><div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-600px">
                                        <div className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible py-2 py-lg-6" data-kt-menu-dismiss="true">

                                            <div className="row px-lg-5">

                                                <div className="col-lg-6 py-1">

                                                    <div className="menu-item p-0 m-0">

                                                        <a href="/keen/demo9/index.html" className="menu-link active">
                                                            <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                <i className="ki-duotone ki-basket text-primary fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>                        </span>

                                                            <span className="d-flex flex-column">
                                                                <span className="fs-6 fw-semibold text-gray-800">Default</span>
                                                                <span className="fs-7 fw-semibold text-muted">Reports &amp; statistics</span>
                                                            </span>
                                                        </a>

                                                    </div>

                                                </div>


                                                <div className="col-lg-6 py-1">

                                                    <div className="menu-item p-0 m-0">

                                                        <a href="/keen/demo9/dashboards/projects.html" className="menu-link ">
                                                            <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                <i className="ki-duotone ki-abstract-44 text-info fs-1"><span className="path1"></span><span className="path2"></span></i>                        </span>

                                                            <span className="d-flex flex-column">
                                                                <span className="fs-6 fw-semibold text-gray-800">Projects</span>
                                                                <span className="fs-7 fw-semibold text-muted">Tasts, graphs &amp; charts</span>
                                                            </span>
                                                        </a>

                                                    </div>

                                                </div>


                                                <div className="col-lg-6 py-1">

                                                    <div className="menu-item p-0 m-0">

                                                        <a href="/keen/demo9/dashboards/ecommerce.html" className="menu-link ">
                                                            <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                <i className="ki-duotone ki-element-11 text-danger fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>                        </span>

                                                            <span className="d-flex flex-column">
                                                                <span className="fs-6 fw-semibold text-gray-800">eCommerce</span>
                                                                <span className="fs-7 fw-semibold text-muted">Sales reports</span>
                                                            </span>
                                                        </a>

                                                    </div>

                                                </div>


                                                <div className="col-lg-6 py-1">

                                                    <div className="menu-item p-0 m-0">

                                                        <a href="/keen/demo9/dashboards/marketing.html" className="menu-link ">
                                                            <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                <i className="ki-duotone ki-chart-simple text-gray-900 fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>                        </span>

                                                            <span className="d-flex flex-column">
                                                                <span className="fs-6 fw-semibold text-gray-800">Marketing</span>
                                                                <span className="fs-7 fw-semibold text-muted">Campaings &amp; conversions</span>
                                                            </span>
                                                        </a>

                                                    </div>

                                                </div>


                                                <div className="col-lg-6 py-1">

                                                    <div className="menu-item p-0 m-0">

                                                        <a href="/keen/demo9/dashboards/social.html" className="menu-link ">
                                                            <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                <i className="ki-duotone ki-abstract-39 text-success fs-1"><span className="path1"></span><span className="path2"></span></i>                        </span>

                                                            <span className="d-flex flex-column">
                                                                <span className="fs-6 fw-semibold text-gray-800">Social</span>
                                                                <span className="fs-7 fw-semibold text-muted">Feeds &amp; Activities</span>
                                                            </span>
                                                        </a>

                                                    </div>

                                                </div>


                                                <div className="col-lg-6 py-1">

                                                    <div className="menu-item p-0 m-0">

                                                        <a href="/keen/demo9/dashboards/bidding.html" className="menu-link ">
                                                            <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                <i className="ki-duotone ki-switch text-warning fs-1"><span className="path1"></span><span className="path2"></span></i>                        </span>

                                                            <span className="d-flex flex-column">
                                                                <span className="fs-6 fw-semibold text-gray-800">Bidding</span>
                                                                <span className="fs-7 fw-semibold text-muted">Deals &amp; stock exchange</span>
                                                            </span>
                                                        </a>

                                                    </div>

                                                </div>


                                                <div className="col-lg-6 py-1">

                                                    <div className="menu-item p-0 m-0">

                                                        <a href="/keen/demo9/dashboards/online-courses.html" className="menu-link ">
                                                            <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                <i className="ki-duotone ki-color-swatch text-success fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span><span className="path17"></span><span className="path18"></span><span className="path19"></span><span className="path20"></span><span className="path21"></span></i>                        </span>

                                                            <span className="d-flex flex-column">
                                                                <span className="fs-6 fw-semibold text-gray-800">Online Courses</span>
                                                                <span className="fs-7 fw-semibold text-muted">Student progress</span>
                                                            </span>
                                                        </a>

                                                    </div>

                                                </div>


                                                <div className="col-lg-6 py-1">

                                                    <div className="menu-item p-0 m-0">

                                                        <a href="/keen/demo9/dashboards/logistics.html" className="menu-link ">
                                                            <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                <i className="ki-duotone ki-truck text-info fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></i>                        </span>

                                                            <span className="d-flex flex-column">
                                                                <span className="fs-6 fw-semibold text-gray-800">Logistics</span>
                                                                <span className="fs-7 fw-semibold text-muted">Shipments and delivery</span>
                                                            </span>
                                                        </a>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div></div><div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2"><span className="menu-link py-3"><span className="menu-title">Pages</span><span className="menu-arrow d-lg-none"></span></span><div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                                        <div className="menu-active-bg px-4 px-lg-0">

                                            <div className="d-flex w-100 overflow-auto">
                                                <ul className="nav nav-stretch nav-line-tabs fw-semibold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1" role="tablist">

                                                    <li className="nav-item mx-lg-1" role="presentation">
                                                        <a className="nav-link py-3 py-lg-6 active text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_pages" aria-selected="true" role="tab">
                                                            General                    </a>
                                                    </li>


                                                    <li className="nav-item mx-lg-1" role="presentation">
                                                        <a className="nav-link py-3 py-lg-6  text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_account" aria-selected="false" tabindex="-1" role="tab">
                                                            Account                    </a>
                                                    </li>


                                                    <li className="nav-item mx-lg-1" role="presentation">
                                                        <a className="nav-link py-3 py-lg-6  text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_authentication" aria-selected="false" tabindex="-1" role="tab">
                                                            Authentication                    </a>
                                                    </li>


                                                    <li className="nav-item mx-lg-1" role="presentation">
                                                        <a className="nav-link py-3 py-lg-6  text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_utilities" aria-selected="false" tabindex="-1" role="tab">
                                                            Utilities                    </a>
                                                    </li>

                                                </ul>
                                            </div>



                                            <div className="tab-content py-4 py-lg-8 px-lg-7">

                                                <div className="tab-pane active w-lg-1000px" id="kt_app_header_menu_pages_pages" role="tabpanel">

                                                    <div className="row">

                                                        <div className="col-lg-8">

                                                            <div className="row">

                                                                <div className="col-lg-3 mb-6 mb-lg-0">

                                                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">User Profile</h4>



                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/pages/user-profile/overview.html" className="menu-link ">
                                                                            <span className="menu-title">Overview</span>
                                                                        </a>

                                                                    </div>


                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/pages/user-profile/projects.html" className="menu-link ">
                                                                            <span className="menu-title">Projects</span>
                                                                        </a>

                                                                    </div>


                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/pages/user-profile/campaigns.html" className="menu-link ">
                                                                            <span className="menu-title">Campaigns</span>
                                                                        </a>

                                                                    </div>


                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/pages/user-profile/documents.html" className="menu-link ">
                                                                            <span className="menu-title">Documents</span>
                                                                        </a>

                                                                    </div>


                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/pages/user-profile/followers.html" className="menu-link ">
                                                                            <span className="menu-title">Followers</span>
                                                                        </a>

                                                                    </div>


                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/pages/user-profile/activity.html" className="menu-link ">
                                                                            <span className="menu-title">Activity</span>
                                                                        </a>

                                                                    </div>

                                                                </div>



                                                                <div className="col-lg-3 mb-6 mb-lg-0">

                                                                    <div className="mb-6">

                                                                        <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Corporate</h4>



                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/about.html" className="menu-link ">
                                                                                <span className="menu-title">About</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/team.html" className="menu-link ">
                                                                                <span className="menu-title">Our Team</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/faq.html" className="menu-link ">
                                                                                <span className="menu-title">FAQ</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/contact.html" className="menu-link ">
                                                                                <span className="menu-title">Contact Us</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/pricing.html" className="menu-link ">
                                                                                <span className="menu-title">Pricing</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/licenses.html" className="menu-link ">
                                                                                <span className="menu-title">Licenses</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/sitemap.html" className="menu-link ">
                                                                                <span className="menu-title">Sitemap</span>
                                                                            </a>

                                                                        </div>

                                                                    </div>

                                                                </div>



                                                                <div className="col-lg-3 mb-6 mb-lg-0">

                                                                    <div className="mb-6">

                                                                        <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Blog</h4>



                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/blog/home.html" className="menu-link ">
                                                                                <span className="menu-title">Blog Home</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/blog/post.html" className="menu-link ">
                                                                                <span className="menu-title">Blog Post</span>
                                                                            </a>

                                                                        </div>

                                                                    </div>



                                                                    <div className="mb-0">

                                                                        <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Careers</h4>



                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/careers/list.html" className="menu-link ">
                                                                                <span className="menu-title">Careers List</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/careers/apply.html" className="menu-link ">
                                                                                <span className="menu-title">Careers Apply</span>
                                                                            </a>

                                                                        </div>

                                                                    </div>

                                                                </div>



                                                                <div className="col-lg-3 mb-6 mb-lg-0">

                                                                    <div className="mb-0">

                                                                        <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Social</h4>



                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/social/feeds.html" className="menu-link ">
                                                                                <span className="menu-title">Feeds</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/social/activity.html" className="menu-link ">
                                                                                <span className="menu-title">Activty</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/social/followers.html" className="menu-link ">
                                                                                <span className="menu-title">Followers</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/pages/social/settings.html" className="menu-link ">
                                                                                <span className="menu-title">Settings</span>
                                                                            </a>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>



                                                        <div className="col-lg-4">

                                                        </div>

                                                    </div>

                                                </div>



                                                <div className="tab-pane  w-lg-600px" id="kt_app_header_menu_pages_account" role="tabpanel">

                                                    <div className="row">

                                                        <div className="col-lg-5 mb-6 mb-lg-0">

                                                            <div className="row">

                                                                <div className="col-lg-6">

                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/account/overview.html" className="menu-link ">
                                                                            <span className="menu-title">Overview</span>
                                                                        </a>

                                                                    </div>


                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/account/settings.html" className="menu-link ">
                                                                            <span className="menu-title">Settings</span>
                                                                        </a>

                                                                    </div>


                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/account/security.html" className="menu-link ">
                                                                            <span className="menu-title">Security</span>
                                                                        </a>

                                                                    </div>


                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/account/activity.html" className="menu-link ">
                                                                            <span className="menu-title">Activity</span>
                                                                        </a>

                                                                    </div>


                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/account/billing.html" className="menu-link ">
                                                                            <span className="menu-title">Billing</span>
                                                                        </a>

                                                                    </div>

                                                                </div>



                                                                <div className="col-lg-6">

                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/account/statements.html" className="menu-link ">
                                                                            <span className="menu-title">Statements</span>
                                                                        </a>

                                                                    </div>


                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/account/referrals.html" className="menu-link ">
                                                                            <span className="menu-title">Referrals</span>
                                                                        </a>

                                                                    </div>


                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/account/api-keys.html" className="menu-link ">
                                                                            <span className="menu-title">API Keys</span>
                                                                        </a>

                                                                    </div>


                                                                    <div className="menu-item p-0 m-0">

                                                                        <a href="/keen/demo9/account/logs.html" className="menu-link ">
                                                                            <span className="menu-title">Logs</span>
                                                                        </a>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>



                                                        <div className="col-lg-7">

                                                        </div>

                                                    </div>
                                                </div>



                                                <div className="tab-pane  w-lg-600px" id="kt_app_header_menu_pages_authentication" role="tabpanel">

                                                    <div className="row">

                                                        <div className="col-lg-4 mb-6 mb-lg-0">

                                                            <div className="mb-6">

                                                                <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Corporate</h4>



                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/layouts/corporate/sign-in.html" className="menu-link ">
                                                                        <span className="menu-title">Sign-In</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/layouts/corporate/sign-up.html" className="menu-link ">
                                                                        <span className="menu-title">Sign-Up</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/layouts/corporate/two-factor.html" className="menu-link ">
                                                                        <span className="menu-title">Two-steps</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/layouts/corporate/reset-password.html" className="menu-link ">
                                                                        <span className="menu-title">Reset Password</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/layouts/corporate/new-password.html" className="menu-link ">
                                                                        <span className="menu-title">New Password</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/extended/multi-steps-sign-up.html" className="menu-link ">
                                                                        <span className="menu-title">Multi-steps Sign-Up</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/extended/two-factor-auth.html" className="menu-link ">
                                                                        <span className="menu-title">Two Factor Auth</span>
                                                                    </a>

                                                                </div>

                                                            </div>

                                                        </div>



                                                        <div className="col-lg-4 mb-6 mb-lg-0">

                                                            <div className="mb-0">

                                                                <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">General</h4>



                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/general/welcome.html" className="menu-link ">
                                                                        <span className="menu-title">Welcome Message</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/general/verify-email.html" className="menu-link ">
                                                                        <span className="menu-title">Verify Email</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/general/coming-soon.html" className="menu-link ">
                                                                        <span className="menu-title">Coming Soon</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/general/password-confirmation.html" className="menu-link ">
                                                                        <span className="menu-title">Password Confirmation</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/general/account-deactivated.html" className="menu-link ">
                                                                        <span className="menu-title">Account Deactivation</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/general/error-404.html" className="menu-link ">
                                                                        <span className="menu-title">Error 404</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/general/error-500.html" className="menu-link ">
                                                                        <span className="menu-title">Error 500</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/general/maintenance.html" className="menu-link ">
                                                                        <span className="menu-title">Maintenance</span>
                                                                    </a>

                                                                </div>

                                                            </div>

                                                        </div>



                                                        <div className="col-lg-4 mb-6 mb-lg-0">

                                                            <div className="mb-0">

                                                                <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Email Templates</h4>



                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/email/welcome-message.html" className="menu-link ">
                                                                        <span className="menu-title">Welcome Message</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/email/reset-password.html" className="menu-link ">
                                                                        <span className="menu-title">Reset Password</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/email/subscription-confirmed.html" className="menu-link ">
                                                                        <span className="menu-title">Subscription Confirmed</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/email/card-declined.html" className="menu-link ">
                                                                        <span className="menu-title">Credit Card Declined</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/email/promo-1.html" className="menu-link ">
                                                                        <span className="menu-title">Promo 1</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/email/promo-2.html" className="menu-link ">
                                                                        <span className="menu-title">Promo 2</span>
                                                                    </a>

                                                                </div>


                                                                <div className="menu-item p-0 m-0">

                                                                    <a href="/keen/demo9/authentication/email/promo-3.html" className="menu-link ">
                                                                        <span className="menu-title">Promo 3</span>
                                                                    </a>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>



                                                <div className="tab-pane  w-lg-1000px" id="kt_app_header_menu_pages_utilities" role="tabpanel">

                                                    <div className="row">

                                                        <div className="col-lg-7">

                                                            <div className="row">

                                                                <div className="col-lg-4 mb-6 mb-lg-0">

                                                                    <div className="mb-0">

                                                                        <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">General Modals</h4>



                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/general/invite-friends.html" className="menu-link ">
                                                                                <span className="menu-title">Invite Friends</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/general/view-users.html" className="menu-link ">
                                                                                <span className="menu-title">View Users</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/general/select-users.html" className="menu-link ">
                                                                                <span className="menu-title">Select Users</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/general/upgrade-plan.html" className="menu-link ">
                                                                                <span className="menu-title">Upgrade Plan</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/general/share-earn.html" className="menu-link ">
                                                                                <span className="menu-title">Share &amp; Earn</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/forms/new-target.html" className="menu-link ">
                                                                                <span className="menu-title">New Target</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/forms/new-card.html" className="menu-link ">
                                                                                <span className="menu-title">New Card</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/forms/new-address.html" className="menu-link ">
                                                                                <span className="menu-title">New Address</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/forms/create-api-key.html" className="menu-link ">
                                                                                <span className="menu-title">Create API Key</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/forms/bidding.html" className="menu-link ">
                                                                                <span className="menu-title">Bidding</span>
                                                                            </a>

                                                                        </div>

                                                                    </div>

                                                                </div>



                                                                <div className="col-lg-4 mb-6 mb-lg-0">

                                                                    <div className="mb-6">

                                                                        <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Advanced Modals</h4>



                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/wizards/create-app.html" className="menu-link ">
                                                                                <span className="menu-title">Create App</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/wizards/create-campaign.html" className="menu-link ">
                                                                                <span className="menu-title">Create Campaign</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/wizards/create-account.html" className="menu-link ">
                                                                                <span className="menu-title">Create Business Acc</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/wizards/create-project.html" className="menu-link ">
                                                                                <span className="menu-title">Create Project</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/wizards/top-up-wallet.html" className="menu-link ">
                                                                                <span className="menu-title">Top Up Wallet</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/wizards/offer-a-deal.html" className="menu-link ">
                                                                                <span className="menu-title">Offer a Deal</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/wizards/two-factor-authentication.html" className="menu-link ">
                                                                                <span className="menu-title">Two Factor Auth</span>
                                                                            </a>

                                                                        </div>

                                                                    </div>



                                                                    <div className="mb-0">

                                                                        <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Search</h4>



                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/search/horizontal.html" className="menu-link ">
                                                                                <span className="menu-title">Horizontal</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/search/vertical.html" className="menu-link ">
                                                                                <span className="menu-title">Vertical</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/search/users.html" className="menu-link ">
                                                                                <span className="menu-title">Users</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/search/select-location.html" className="menu-link ">
                                                                                <span className="menu-title">Select Location</span>
                                                                            </a>

                                                                        </div>

                                                                    </div>

                                                                </div>



                                                                <div className="col-lg-4 mb-6 mb-lg-0">

                                                                    <div className="mb-0">

                                                                        <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">Wizards</h4>



                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/wizards/horizontal.html" className="menu-link ">
                                                                                <span className="menu-title">Horizontal</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/wizards/vertical.html" className="menu-link ">
                                                                                <span className="menu-title">Vertical</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/wizards/two-factor-authentication.html" className="menu-link ">
                                                                                <span className="menu-title">Two Factor Auth</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/wizards/create-app.html" className="menu-link ">
                                                                                <span className="menu-title">Create App</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/wizards/create-campaign.html" className="menu-link ">
                                                                                <span className="menu-title">Create Campaign</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/wizards/create-account.html" className="menu-link ">
                                                                                <span className="menu-title">Create Account</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/wizards/create-project.html" className="menu-link ">
                                                                                <span className="menu-title">Create Project</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/modals/wizards/top-up-wallet.html" className="menu-link ">
                                                                                <span className="menu-title">Top Up Wallet</span>
                                                                            </a>

                                                                        </div>


                                                                        <div className="menu-item p-0 m-0">

                                                                            <a href="/keen/demo9/utilities/wizards/offer-a-deal.html" className="menu-link ">
                                                                                <span className="menu-title">Offer a Deal</span>
                                                                            </a>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>



                                                        <div className="col-lg-5 pe-lg-5">

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>


                                    </div>

                                    </div>




                                    <div className="app-navbar flex-shrink-0">

                                        <div className="app-navbar-item ms-3" id="kt_header_user_menu_toggle">

                                            <div className="text-end d-none d-sm-flex flex-column justify-content-center me-3">
                                                <a href="/keen/demo9/pages/user-profile/overview.html" className="text-white text-hover-primary fs-6 fw-bold">Carles</a>

                                                <span className="text-gray-600 fs-7 fw-semibold d-block">Hexagon.click</span>
                                            </div>



                                            <div className="cursor-pointer symbol symbol-35px symbol-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                            </div>


                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true" >

                                                <div className="menu-item px-3">
                                                    <div className="menu-content d-flex align-items-center px-3">

                                                        <div className="symbol symbol-50px me-5">
                                                        </div>



                                                        <div className="d-flex flex-column">
                                                            <div className="fw-bold d-flex align-items-center fs-5">
                                                                Carles                    <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
                                                            </div>

                                                            <a href="#" className="fw-semibold text-muted text-hover-primary fs-7">
                                                                carles@kt.com                </a>
                                                        </div>

                                                    </div>
                                                </div>



                                                <div className="separator my-2"></div>



                                                <div className="menu-item px-5">
                                                    <a href="/keen/demo9/account/overview.html" className="menu-link px-5">
                                                        My Profile
                                                    </a>
                                                </div>



                                                <div className="menu-item px-5">
                                                    <a href="/keen/demo9/apps/projects/list.html" className="menu-link px-5">
                                                        <span className="menu-text">My Projects</span>
                                                        <span className="menu-badge">
                                                            <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
                                                        </span>
                                                    </a>
                                                </div>



                                                <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                                    <a href="#" className="menu-link px-5">
                                                        <span className="menu-title">My Subscription</span>
                                                        <span className="menu-arrow"></span>
                                                    </a>


                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">

                                                        <div className="menu-item px-3">
                                                            <a href="/keen/demo9/account/referrals.html" className="menu-link px-5">
                                                                Referrals
                                                            </a>
                                                        </div>



                                                        <div className="menu-item px-3">
                                                            <a href="/keen/demo9/account/billing.html" className="menu-link px-5">
                                                                Billing
                                                            </a>
                                                        </div>



                                                        <div className="menu-item px-3">
                                                            <a href="/keen/demo9/account/statements.html" className="menu-link px-5">
                                                                Payments
                                                            </a>
                                                        </div>



                                                        <div className="menu-item px-3">
                                                            <a href="/keen/demo9/account/statements.html" className="menu-link d-flex flex-stack px-5">
                                                                Statements

                                                                <span className="ms-2 lh-0" data-bs-toggle="tooltip" aria-label="View your statements" data-bs-original-title="View your statements" data-kt-initialized="1">
                                                                    <i className="ki-duotone ki-information-5 fs-5"><span className="path1"></span><span className="path2"></span><span className="path3"></span></i>                    </span>
                                                            </a>
                                                        </div>



                                                        <div className="separator my-2"></div>



                                                        <div className="menu-item px-3">
                                                            <div className="menu-content px-3">
                                                                <label className="form-check form-switch form-check-custom form-check-solid">
                                                                    <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
                                                                    <span className="form-check-label text-muted fs-7">
                                                                        Notifications
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>



                                                <div className="menu-item px-5">
                                                    <a href="/keen/demo9/account/statements.html" className="menu-link px-5">
                                                        My Statements
                                                    </a>
                                                </div>



                                                <div className="separator my-2"></div>




                                                <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                                    <a href="#" className="menu-link px-5">
                                                        <span className="menu-title position-relative">
                                                            Language

                                                            <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                                                                English
                                                            </span>
                                                        </span>
                                                    </a>


                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">

                                                        <div className="menu-item px-3">
                                                            <a href="/keen/demo9/account/settings.html" className="menu-link d-flex px-5 active">
                                                                <span className="symbol symbol-20px me-4">

                                                                </span>
                                                                English
                                                            </a>
                                                        </div>



                                                        <div className="menu-item px-3">
                                                            <a href="/keen/demo9/account/settings.html" className="menu-link d-flex px-5">
                                                                <span className="symbol symbol-20px me-4">

                                                                </span>
                                                                Spanish
                                                            </a>
                                                        </div>





                                                    </div>

                                                </div>



                                                <div className="menu-item px-5 my-1">
                                                    <a href="/keen/demo9/account/settings.html" className="menu-link px-5">
                                                        Account Settings
                                                    </a>
                                                </div>



                                                <div className="menu-item px-5">
                                                    <a href="/keen/demo9/authentication/layouts/corporate/sign-in.html" className="menu-link px-5">
                                                        Sign Out
                                                    </a>
                                                </div>

                                            </div>


                                        </div>



                                        <div className="app-navbar-item ms-3">


                                            <a href="#" className="btn btn-icon btn-icon-white btn-active-color-primary btn-custom w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                                <i className="ki-duotone ki-night-day theme-light-show fs-2"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span></i>    <i className="ki-duotone ki-moon theme-dark-show fs-2"><span className="path1"></span><span className="path2"></span></i></a>



                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu" >

                                                <div className="menu-item px-3 my-0">
                                                    <a href="#" className="menu-link px-3 py-2 active" data-kt-element="mode" data-kt-value="light">
                                                        <span className="menu-icon" data-kt-element="icon">
                                                            <i className="ki-duotone ki-night-day fs-2"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span></i>            </span>
                                                        <span className="menu-title">
                                                            Light
                                                        </span>
                                                    </a>
                                                </div>



                                                <div className="menu-item px-3 my-0">
                                                    <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
                                                        <span className="menu-icon" data-kt-element="icon">
                                                            <i className="ki-duotone ki-moon fs-2"><span className="path1"></span><span className="path2"></span></i>            </span>
                                                        <span className="menu-title">
                                                            Dark
                                                        </span>
                                                    </a>
                                                </div>



                                                <div className="menu-item px-3 my-0">
                                                    <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
                                                        <span className="menu-icon" data-kt-element="icon">
                                                            <i className="ki-duotone ki-screen fs-2"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>            </span>
                                                        <span className="menu-title">
                                                            System
                                                        </span>
                                                    </a>
                                                </div>

                                            </div>


                                        </div>



                                        <div className="app-navbar-item ms-3">

                                            <a href="/keen/demo9/authentication/layouts/corporate/sign-in.html" className="btn btn-icon btn-icon-white btn-active-color-primary btn-custom w-35px h-35px w-md-40px h-md-40px">
                                                <i className="ki-duotone ki-entrance-left fs-2"><span className="path1"></span><span className="path2"></span></i>        </a>

                                        </div>




                                    </div>


                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBarVertical;