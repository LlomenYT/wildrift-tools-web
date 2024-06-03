// api.js
import axios from "axios";

const axiosInstance = (sessionToken) =>
  axios.create({
    timeout: 10000, // Tiempo de espera máximo para las solicitudes
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      accept: "application/json",
      "session-token": sessionToken,
    },
  });

// Función para hacer una solicitud GET
export const getWithAuth = async (url, userSession) => {
  try {
    const response = await axiosInstance(userSession.sessionToken).get(url, {
      headers: {
        Authorization: `Bearer ${userSession.idToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para hacer una solicitud GET
export const deleteWithAuth = async (url, userSession) => {
  try {
    const response = await axiosInstance(userSession.sessionToken).delete(url, {
      headers: {
        Authorization: `Bearer ${userSession.idToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para hacer una solicitud POST
export const post = async (url, data, sessionToken) => {
  try {
    const response = await axiosInstance(sessionToken).post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para hacer una solicitud POST
export const postWithAuth = async (url, data, userSession) => {
  try {
    const response = await axiosInstance(userSession.sessionToken).post(
      url,
      data,
      {
        headers: {
          Authorization: `Bearer ${userSession.idToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// Función para hacer una solicitud POST
export const postWithAuthMultiPart = async (url, data, userSession) => {
  try {
    const response = await axiosInstance(userSession.sessionToken).post(
      url,
      data,
      {
        headers: {
          Authorization: `Bearer ${userSession.idToken}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};
