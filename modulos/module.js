import { URL } from "./config";


export const fetchDocumentos = async function () {
  const data = await fetch(`${URL}/docs`);
  const tipos = await data.json();
  return tipos;
};

export const fetchUsuarios = async function () {
  const data = await fetch(`${URL}/users`);
  const tipos = await data.json();
  return tipos;
};



