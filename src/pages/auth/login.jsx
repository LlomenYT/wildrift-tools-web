import { useState } from 'react';
import bg from '../../imgs/bg-fondo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { apiUrls } from "../../api/apiConfig";
import { post } from "../../api/api";
import { useAuth } from "../../context/authcontext";
import { useCommon } from "../../context/commonContext";


const Login = () => {

    const auth = useAuth();
    const commonContext = useCommon();
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [showError, setShowError] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            const response = await post(apiUrls.authAdmin.adminLogin, {
                username: email, // Usamos el valor del email como username
                password: password, // Usamos el valor de la contraseña proporcionada
            });
            if (response.status === "success") {
                const { id_token, access_token, session_token } = response.result;
                auth.login(id_token, access_token, session_token);
                const redirectUrl = new URLSearchParams(location.search).get(
                    "redirect"
                );
                if (redirectUrl) {
                    navigate(redirectUrl);
                } else {
                    navigate("/");
                }
            } else if (response.status === "error") {
                console.error("Error al iniciar sesión:", response);
                commonContext.setAlertTypeLogin("danger");
                commonContext.setMessageLogin(response.detail);
                commonContext.openAlertHeaderLogin();
            }
            // history.push('/dashboard');
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            commonContext.setAlertTypeLogin("danger");
            commonContext.setMessageLogin(error);
            commonContext.openAlertHeaderLogin();
        }
        setLoading(false);
    };


    return (
        <>
            <div className='background-container' style={{ background: `url(${bg}) no-repeat center center fixed`, backgroundSize: 'cover', height: '100vh' }}>

                <div className="container-fluid p-10">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4 col-sm-11">
                            <div className="card back-negro-figma p-20">
                                <div className="card-body">
                                    <div className="row d-flex align-items-center justify-content-between">
                                        <div className="col-auto">

                                        </div>
                                    </div>


                                    <h1 className='title_grande mt-20 my-7'>Panel de administración</h1>



                                    <form onSubmit={handleLogin}>
                                        <div className="fv-row mb-5 mt-20 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid" data-kt-buttons="true" data-kt-initialized="1">

                                            <div className="fv-row mb-8 fv-plugins-icon-container">

                                                <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                                    <span className="text-white">Email</span>
                                                    <span className="ms-1" data-bs-toggle="tooltip" aria-label="Renta original" data-bs-original-title="Introducir la renta total (€)" data-kt-initialized="1">

                                                    </span>
                                                </label>


                                                <input type="text" className="form-control form-control-solid-dark" placeholder="email@corbitaltech.com" name="settings_name" onChange={(event) => setEmail(event.target.value)} />

                                                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                            </div>
                                        </div>

                                        <div className="fv-row mb-5 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid" data-kt-buttons="true" data-kt-initialized="1">

                                            <div className="fv-row mb-8 fv-plugins-icon-container">

                                                <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                                    <span className="text-white">Contraseña</span>
                                                    <span className="ms-1" data-bs-toggle="tooltip" aria-label="Renta original" data-bs-original-title="Introducir la renta total (€)" data-kt-initialized="1">

                                                    </span>
                                                </label>


                                                <input type="password" className="form-control form-control-solid-dark" placeholder="Introduce tu contraseña" name="settings_name" onChange={(event) => setPassword(event.target.value)} />

                                                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                            </div>
                                        </div>

                                        {showError && (
                                            <>
                                                <div class="alert alert-primary d-flex align-items-center p-5 back-negro2-figma">
                                                    <i class="ki-duotone ki-cross fs-2hx text-danger me-4"><span class="path1"></span><span class="path2"></span></i>
                                                    <div class="d-flex flex-column">
                                                        <h4 class="mb-1 text-white">Datos erróneos</h4>
                                                        <span>Compruebe sus credenciales e intentelo de nuevo</span>
                                                    </div>
                                                </div>
                                            </>
                                        )}



                                        <button type="submit" className="btn btn-lg btn-primary-figma text-white mt-10" data-kt-element="type-next"  >
                                            <span className="indicator-label"> {loading ? 'Cargando...' : 'Acceder'}
                                            </span>

                                            <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.6665 0.833415L6.33317 5.50008L1.6665 10.1667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Login;