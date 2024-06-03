import React, { useState, useContext, useEffect } from 'react';
import { useCommon } from '../../../context/commonContext';
import { AuthContext } from "../../../context/authcontext";
import { apiUrls } from '../../../api/apiConfig';
import { getWithAuth, postWithAuth } from '../../../api/api';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';






const ModalUsuario = ({ onClose, title, isNewUser, user }) => {


    const commonContext = useCommon();
    const { getLoggedSession } = useContext(AuthContext);
    const userSession = getLoggedSession();
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState(isNewUser ? {
        email: null,
        name: null,
        lastname: null,
        password: null,
        org_id: null
    } : user)



    const handleInputChange = (event) => {
        const { id, value, type, checked } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [id]: type === "checkbox" ? !prevData[id] : value,
        }));
    };

    const [organizacionesData, setOrganizacionesData] = useState([

    ]);

    const handleFieldAdded = (data) => {
        setUserData((prevData) => ({
            ...prevData,
            org_id: data,
        }));
    };

    const handlePostForm = (e) => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await postWithAuth(
                    isNewUser ?
                        apiUrls.users.create : apiUrls.users.edit(user.id),
                    userData,
                    userSession
                );
                if (data.status === "success") {
                    commonContext.changeApiSuccess();
                    onClose();
                } else {

                }
            } catch (error) {
                commonContext.setMessage("Ha ocurrido un error conectando con el servidor");
                commonContext.setAlertType("danger");
                commonContext.openAlertHeader();
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    };



    useEffect(() => {
        const fetchOrgData = async () => {
            setIsLoading(true);
            try {
                const data = await getWithAuth(
                    apiUrls.organizations.list,
                    userSession
                );
                setOrganizacionesData(data.results);
            } catch (error) {
                /*  ctx.setMessage("Ha ocurrido un error conectando con el servidor");
                 ctx.setAlertType("danger");
                 ctx.openAlertHeader(); */
                console.error("Error getting cards:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchOrgData();

    }, [commonContext.apiSuccess]);


    return (
        <div className="modal fade show custom-modal" id="kt_modal_create_project" tabindex="-1" aria-modal="true" role="dialog" style={{ display: 'block' }}>

            <div className="modal-dialog modal-dialog-centered modal-small mw-750px p-9">

                <div className="modal-content modal-rounded">

                    <div className="modal-header">

                        <h2>{title}</h2>


                        <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                            <a onClick={onClose}>
                                <i className="ki-outline ki-cross fs-1"></i>
                            </a>
                        </div>

                    </div>


                    <div className="modal-body scroll-y m-5">
                        <div className="container">
                            <div className="col-12">  <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                <span className="">Organización</span>
                                <span className="ms-1" data-bs-toggle="tooltip" aria-label="Renta original" data-bs-original-title="Introducir la renta total (€)" data-kt-initialized="1">

                                </span>
                            </label>
                                <Autocomplete
                                    id="asynchronous-demo"
                                    sx={{

                                        '& .MuiAutocomplete-inputRoot': {
                                            height: '3em',
                                            borderColor: 'red',
                                            ":focus": {
                                                borderColor: 'red',
                                            },
                                            fontFamily: 'Sen'
                                        },

                                    }}
                                    open={open}
                                    onOpen={() => {
                                        setOpen(true);
                                    }}
                                    onClose={() => {
                                        setOpen(false);
                                    }}
                                    getOptionLabel={(option) => option.company_name}
                                    onChange={(e, value) => {
                                        if (value !== null) {
                                            handleFieldAdded(value.id)
                                        }

                                    }}
                                    options={organizacionesData}
                                    loading={isLoading}
                                    label={"Selecciona una organización"}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            className='form-control form-control-solid'
                                            InputProps={{
                                                ...params.InputProps,
                                                endAdornment: (
                                                    <React.Fragment>
                                                        {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                                                        {params.InputProps.endAdornment}
                                                    </React.Fragment>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">  <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                    <span className="">Nombre</span>
                                    <span className="ms-1" data-bs-toggle="tooltip" aria-label="Renta original" data-bs-original-title="Introducir la renta total (€)" data-kt-initialized="1">

                                    </span>
                                </label>
                                    <input class="form-control form-control-solid text-negro" id='name' name='name' placeholder='Introduce el nombre' defaultValue={userData.name ? userData.name : ''} onChange={handleInputChange}></input></div>

                            </div>
                            <div className="row">
                                <div className="col-12">  <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                    <span className="">Apellidos</span>
                                    <span className="ms-1" data-bs-toggle="tooltip" aria-label="Renta original" data-bs-original-title="Introducir la renta total (€)" data-kt-initialized="1">

                                    </span>
                                </label>
                                    <input class="form-control form-control-solid text-negro" id='lastname' name='lastname' placeholder='Introduce los apellidos' defaultValue={userData.lastname ? userData.lastname : ''} onChange={handleInputChange}></input></div>

                            </div>
                            <div className="row mt-3">
                                <div className="col-12">  <label class="form-label body_s_semibold text-azul-oscuro" for="">Email</label>
                                    <input class="form-control form-control-solid  text-negro" type='email' id='email' name='email' contentEditable={isNewUser ? true : false} placeholder='email@email.com' defaultValue={userData.email ? userData.email : ''} onChange={handleInputChange} disabled={!isNewUser}></input></div>
                                <div className="col-12 mt-3">  <label class="form-label body_s_semibold text-azul-oscuro" for="">Contraseña</label>
                                    <input class="form-control form-control-solid text-negro" type='password' id='password' name='password' placeholder='**************' defaultValue={userData.password ? '************' : ''} onChange={handleInputChange} disabled={!isNewUser}></input></div>


                            </div>

                        </div>

                    </div>


                    <div className="modal-footer" style={{ border: 'none' }}>

                        <div className="column d-flex justify-content-between  col-3">

                            <button type="submit" id="kt_modal_new_target_submit" className="btn btn-dark-figma" onClick={handlePostForm}>
                                <span className="indicator-label text-white">
                                    {isLoading ? (
                                        'Cargando...'
                                    ) :
                                        (
                                            <>

                                                {isNewUser ? "Crear usuario" : "Editar usuario"}
                                            </>
                                        )
                                    }
                                </span>
                            </button>


                        </div>

                    </div>

                </div>

            </div >

        </div >
    );
}

export default ModalUsuario;