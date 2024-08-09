import { fetchDocumentos, fetchUsuarios, enviar } from './modulos/module.js';
import { tipoDocumento } from './modulos/select.js';
import { listarUsuarios } from './modulos/tabla.js';
import * as validation from './modulos/validation.js';
import * as crud from './modulos/crud.js'
import { campoVacio } from './modulos/validateSubmit.js';
import { submitDisable } from './modulos/submitDisable.js'; 





async function database() {
  const documentos = await fetchDocumentos();
  const usuarios = await fetchUsuarios();
  

  console.log(documentos);
  console.log(usuarios);
  

  // ingresar opciones de documentos en el select
  const listaDoc = tipoDocumento(documentos);
  
  // listar todos los usuarios en la tabla
  listarUsuarios(usuarios, documentos);

  document.addEventListener("click", (e) =>{
    let element = "";

    if (e.target.matches(".edit") || e.target.matches(".edit *")) {
      element = e.target.matches(".edit") ? e.target : e.target.parentNode;
      
      
      
      edit(e, element);
    }

    if (e.target.matches(".delete") || e.target.matches(".delete *")) {
      element = e.target.matches(".delete") ? e.target : e.target.parentNode;
    }
    console.log(element);
  })

  const edit = (event, element) =>{
    enviar(`users/${element.dataset.id}`, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((data) => {
      loadForm(data);
      // toggleModal();
    })
  }

    const userId = document.querySelector("#userId");
    const nombreUser = document.querySelector("#nombre");
    const apellidoUser = document.querySelector("#apellido");
    const documentoUser = document.querySelector("#documento");
    const telefonoUser = document.querySelector("#telefono");
    const tipoDocUser = document.querySelector("#tipoDocumento");
    const correoUser = document.querySelector("#correo");
    const direccionUser = document.querySelector("#direccion");
    const terminos = document.querySelector("#terminos");
    const submitButton = document.querySelector("#submit");

    const loadForm = (data) =>{
      const {id, nombre, apellido, documento, telefono, tipo_doc, correo, direccion,} = data;
      
      userId.value = id;
      nombreUser.value = nombre;
      apellidoUser.value = apellido;
      documentoUser.value = documento;
      telefonoUser.value = telefono;
      tipoDocUser.value = tipo_doc;
      correoUser.value = correo;
      direccionUser.value = direccion;
      terminos.checked = true;
      submitButton.removeAttribute("disabled");

      console.log(data)
    }

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


  


    submitDisable()

    

    const form = document.querySelector("#form");

    const submit = document.querySelector("#submit");

    form.addEventListener("submit", (event) =>{
      

      let response = campoVacio(event, "form [required]");
      
      if (response) {
        
        if (userId.value === "") {
          crud.agregarUsuario(usuarios);
        } else{
          crud.editarUsuario(usuarios, userId.value);
        }
        
      } 
    })


    
  
  

  
  const listaEliminar = document.querySelectorAll("#deleteButton");
  crud.eliminarUsuario(listaEliminar);
  

}

database();

