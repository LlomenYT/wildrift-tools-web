import React, { createContext, useContext, useState } from 'react';

const CommonContext = createContext();

export const CommonProvider = ({ children }) => {

    const [selectedObject, setSelectedObject] = useState(null);


    const [message, setMessage] = useState('Esto un mensaje de prueba');
    const [alertType, setAlertType] = useState('success');

    const [confirmationModal, setConfirmationModal] = useState(false);


    const [showAlertHeader, setShowAlertHeader] = useState(false);
    const openAlertHeader = () => {
        setShowAlertHeader(true);
    };
    const closeAlertHeader = () => {
        setShowAlertHeader(false);
    };

    const [showNewModal, setshowNewModal] = useState(false);
    const openshowNewModal = () => {
        setshowNewModal(true);
    };
    const closeshowNewModal = () => {

        setshowNewModal(false);
    };

    const [showEditModal, setShowEditModal] = useState(false);
    const openEditModal = (object) => {
        setSelectedObject(object);
        setShowEditModal(true);
    };
    const closeEditModal = () => {
        setShowEditModal(false);
    };

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const openDeleteModal = (object) => {
        setSelectedObject(object);
        setShowDeleteModal(true);
    };
    const closeDeleteModal = () => {
        setShowDeleteModal(false);
    };


    //Gestion del contenido de los Alert
    const [messageLogin, setMessageLogin] = useState('Esto un mensaje de prueba');
    const [alertTypeLogin, setAlertTypeLogin] = useState('success');


    //Gestion del Alert del Header
    const [showAlertHeaderLogin, setShowAlertHeaderLogin] = useState(false);
    const openAlertHeaderLogin = () => {
        setShowAlertHeaderLogin(true);
    };
    const closeAlertHeaderLogin = () => {
        setShowAlertHeaderLogin(false);
    };

    const [apiSuccess, setApiSuccessSuccess] = useState(false);
    const changeApiSuccess = () => {
        setApiSuccessSuccess(!apiSuccess);
    };

    return (
        <CommonContext.Provider value={{
            alertTypeLogin,
            setAlertTypeLogin,
            setMessageLogin,
            messageLogin,
            openAlertHeaderLogin,
            closeAlertHeaderLogin,
            showAlertHeaderLogin,
            selectedObject,
            setSelectedObject,
            showEditModal,
            openEditModal,
            closeEditModal,
            showDeleteModal,
            openDeleteModal,
            closeDeleteModal,
            showNewModal,
            closeshowNewModal,
            openshowNewModal,
            showAlertHeader,
            openAlertHeader,
            message,
            alertType,
            setMessage,
            setAlertType,
            changeApiSuccess,
            confirmationModal,
            setConfirmationModal,
            apiSuccess
        }}>
            {children}
        </CommonContext.Provider>
    );
};

export const useCommon = () => {
    return useContext(CommonContext);
};

