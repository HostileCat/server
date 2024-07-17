import { fetchDocumentos, fetchUsuarios } from './module.js';




async function database() {
  const documentos = await fetchDocumentos();
  const usuarios = await fetchUsuarios();
  console.log(documentos);
  console.log(usuarios);

  // ingresar opciones al html
  const select = document.querySelector("#tipoDocumento");

  let listaDoc = []


  // agregar opciones al select
  documentos.forEach(tipo => {
    const option = document.createElement("option");
    option.setAttribute("value", tipo.id);
    option.textContent = tipo.nombre;
    select.appendChild(option);

    listaDoc.push(tipo.nombre)
  })


  const tbody = document.querySelector("#cuerpo")

  usuarios.forEach(prop => {
    const fila = document.createElement("tr");

    const celdaID = document.createElement("td")
    const celdaNombre = document.createElement("td");
    const celdaApellido = document.createElement("td");
    const celdaTipoDoc = document.createElement("td");
    const celdaDocumento = document.createElement("td");
    const celdaCorreo = document.createElement("td");
    const celdaDireccion = document.createElement("td");
    
    
    const celdaAcciones = document.createElement("td");
    const botonEditar = document.createElement("button");
    const botonEliminar = document.createElement("button");

    
    celdaID.textContent = prop.id;
    celdaNombre.textContent = prop.nombre;
    celdaApellido.textContent = prop.apellido;
    celdaTipoDoc.textContent = listaDoc[prop.tipo_doc - 1];
    celdaDocumento.textContent = prop.documento;
    celdaCorreo.textContent= prop.correo;
    celdaDireccion.textContent = prop.direccion;


    botonEditar.textContent = "Editar";
    botonEditar.setAttribute("class", "editButton");
    botonEditar.setAttribute("id", "editButton");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.setAttribute("class", "deleteButton");
    botonEliminar.setAttribute("id", "deleteButton");


    celdaAcciones.appendChild(botonEditar);
    celdaAcciones.appendChild(botonEliminar);

    

    fila.appendChild(celdaID);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaApellido);
    fila.appendChild(celdaTipoDoc);
    fila.appendChild(celdaDocumento);
    fila.appendChild(celdaCorreo);
    fila.appendChild(celdaDireccion);
    fila.appendChild(celdaAcciones);
  

    tbody.prepend(fila);


  })


  let idUsuario = usuarios[usuarios.length - 1].id;  
    console.log(idUsuario)

    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido")
    const documento = document.querySelector("#documento")
    const telefono = document.querySelector("#telefono")
    const tipoDoc = document.querySelector("#tipoDocumento")
    const correo = document.querySelector("#correo")
    const direccion = document.querySelector("#direccion")

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    nombre.addEventListener("keypress",(event) =>{
      let tipo = "nombre";
      validarLetras(event, tipo);
    })
    apellido.addEventListener("keypress",(event) =>{
      let tipo = "apellido";
      validarLetras(event, tipo);
    })
    telefono.addEventListener("keypress",(event) =>{
      let tipo = "telefono";
      validarNumeros(event, tipo);
    })
    telefono.addEventListener("blur",(event) =>{
      let tipo = "telefono";
      cantidadNumeros(event, tipo);
    })
    documento.addEventListener("keypress",(event) =>{
      let tipo = "documento";
      validarNumeros(event, tipo);
    })
    documento.addEventListener("blur",(event) =>{
      let tipo = "documento";
      cantidadNumeros(event, tipo);
    })

    correo.addEventListener("blur", (event) =>{

    })


    const validarLetras = function(event, tipo) {
      const regexLetras = /^[a-zA-ZñÑ\ ]{0,}$/

      if (!(regexLetras.test(event.key))) {
        event.preventDefault()
      } 
    }

    const validarNumeros = function(event, tipo) {
      const regexLetras = /^[\d]{0,}$/
      
      if (!(event.keyCode >= 48 && event.keyCode <= 57)) {
        event.preventDefault()
      } 

      
    }
    
    const cantidadNumeros = (event, tipo) =>{
      if (tipo === "documento" ) {
        //Se crea el mensaje de error
        let mensajeError = document.createElement("span")
        mensajeError.setAttribute("id", "errorDocumento")
        mensajeError.setAttribute("class", "mensajeError")
        mensajeError.textContent = "El documento debe tener entre 8 y 10 digitos"
        const padre = documento.parentElement

        let set = document.querySelector("#errorDocumento");
        
        if (documento.value.length >= 8 && documento.value.length <= 10) {
          documento.classList.remove("incorrecto")
          documento.classList.add("correcto")
          if (set !== null) {
            padre.removeChild(set)
          }
          

        }else{
          documento.classList.remove("correcto")
          documento.classList.add("incorrecto")
          if (set === null) {
            padre.appendChild(mensajeError)
          }
        }
        
      }else if(tipo === "telefono"){

        //Se crea el mensaje de error
        let mensajeError = document.createElement("span")
        mensajeError.setAttribute("id", "errorTelefono")
        mensajeError.setAttribute("class", "mensajeError")
        mensajeError.textContent = "El telefono debe tener 10 digitos"
        const padre = telefono.parentElement

        let set = document.querySelector("#errorTelefono");
        
        if (documento.value.length >= 8 && documento.value.length <= 10) {
          documento.classList.remove("incorrecto")
          documento.classList.add("correcto")
          if (set !== null) {
            padre.removeChild(set)
          }
          

        }else{
          documento.classList.remove("correcto")
          documento.classList.add("incorrecto")
          if (set === null) {
            padre.appendChild(mensajeError)
          }
        }
      }

      
    }


  const form = document.querySelector('#form');


  //Agregar un evento submit al formulario
  form.addEventListener('submit', function (event) {
    // Prevenir el comportamiento por defecto del formulario (evitar recarga)
    
    event.preventDefault();

    //ingresar usuarios a la base de datos
    


    
    let usuario = {};

    if (mensajesError.length > 0) {
      alert(mensajesError.join("\n"));
    } else {
      usuario = {
        "id": idUsuario + 1,
        "nombre": nombre,
        "apellido": apellido,
        "documento": parseInt(documento),
        "tipo_doc": parseInt(tipoDoc),
        "correo": correo,
        "direccion": direccion
      }
      fetch("http://127.0.0.1:3000/users", {
        method: "POST",
        body: JSON.stringify(usuario)
      }).then(response =>{
        
        console.log(response)
        // promise = response.json()
        
        // return promise
      })
      // .then(promise =>{
      //   console.log(promise)
      // })
    }

  })

  const action = document.querySelector("#action");
  const eliminar = document.querySelector("#deleteButton");
  console.log();
  eliminar.addEventListener('click', function (event){
    event.preventDefault();
    let id = eliminar.parentElement.parentElement.firstChild.textContent;

    fetch("http://127.0.0.1:3000/users/id", {
      method: "DELETE",
      
    })
  })
  
}

database();

