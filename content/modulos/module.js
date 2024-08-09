import { URL } from "./config.js";


export const fetchDocumentos = async function () {
  try {
    const data = await fetch(`${URL}/docs`);
    const tipos = await data.json();
    return tipos;
  } catch (error) {
    return error;
  }
  
  
};

export const fetchUsuarios = async function () {
  try {
    const data = await fetch(`${URL}/users`);
    const tipos = await data.json();
    return tipos;
  } catch (error) {
    return error;
  }
  
};

export const enviar = async (endpoint, options) => {
    try {
      console.log(endpoint);
      
      const solicitud = await fetch(`${URL}/${endpoint}`, options);
      const data = await solicitud.json();
      return data;
    } catch (error) {
      return error;
    }
}



