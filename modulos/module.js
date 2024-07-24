export const fetchDocumentos = async function () {
  const data = await fetch("http://127.0.0.1:3000/docs");
  const tipos = await data.json();
  return tipos;
};

export const fetchUsuarios = async function () {
  const data = await fetch("http://127.0.0.1:3000/users");
  const tipos = await data.json();
  return tipos;
};



