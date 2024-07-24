import { fetchDocumentos, fetchUsuarios } from './modulos/module.js';
import { tipoDocumento } from './modulos/select.js';
import { listarUsuarios } from './modulos/tabla.js';
import * as validation from './modulos/validation.js';
import * as crud from './modulos/crud.js'


async function database() {
  const documentos = await fetchDocumentos();
  const usuarios = await fetchUsuarios();
  console.log(documentos);
  console.log(usuarios);

  // ingresar opciones de documentos en el select
  const listaDoc = tipoDocumento(documentos);
  
  // listar todos los usuarios en la tabla
  listarUsuarios(usuarios, listaDoc);

  


  

    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const documento = document.querySelector("#documento");
    const telefono = document.querySelector("#telefono");
    const tipoDoc = document.querySelector("#tipoDocumento");
    const correo = document.querySelector("#correo");
    const direccion = document.querySelector("#direccion");

    

    nombre.addEventListener("keypress",(event) =>{
      let tipo = "nombre";
      validation.validarLetras(event, tipo);
    })
    nombre.addEventListener("blur",(event) =>{
      let tipo = "nombre";
      validation.cantidadLetras(event, tipo);
    })


    apellido.addEventListener("keypress",(event) =>{
      let tipo = "apellido";
      validation.validarLetras(event, tipo);
    })
    apellido.addEventListener("blur",(event) =>{
      let tipo = "apellido";
      validation.cantidadLetras(event, tipo);
    })


    telefono.addEventListener("keypress",(event) =>{
      let tipo = "telefono";
      validation.validarNumeros(event, tipo);
    })
    telefono.addEventListener("blur",(event) =>{
      let tipo = "telefono";
      validation.cantidadNumeros(event, tipo);
    })


    documento.addEventListener("keypress",(event) =>{
      let tipo = "documento";
      validation.validarNumeros(event, tipo);
    })
    documento.addEventListener("blur",(event) =>{
      let tipo = "documento";
      validation.cantidadNumeros(event, tipo);
    })


    correo.addEventListener("blur", (event) =>{
      validation.validarCorreo(event)
    })


    
  
  crud.agregarUsuario(usuarios);

  
  const listaEliminar = document.querySelectorAll("#deleteButton");
  crud.eliminarUsuario(listaEliminar);
  
  crud.editarUsuario(usuarios);

}

database();

