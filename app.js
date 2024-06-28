import { fetchDocumentos, fetchUsuarios } from './module.js';

async function database() {
  const documentos = await fetchDocumentos();
  const usuarios = await fetchUsuarios();
  console.log(documentos);
  console.log(usuarios);

  // ingresar opciones al html
  const select = document.querySelector("#tipoDocumento");

  let listaDoc = []

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
    
    celdaID.textContent = prop.id;
    celdaNombre.textContent = prop.nombre;
    celdaApellido.textContent = prop.apellido;
    celdaTipoDoc.textContent = listaDoc[prop.tipo_doc];
    celdaDocumento.textContent = prop.documento;
    celdaCorreo.textContent= prop.correo;
    celdaDireccion.textContent = prop.direccion;

    fila.appendChild(celdaID);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaApellido);
    fila.appendChild(celdaTipoDoc);
    fila.appendChild(celdaDocumento);
    fila.appendChild(celdaCorreo);
    fila.appendChild(celdaDireccion);

  

    tbody.prepend(fila);

  })






  const form = document.querySelector('#form');

  // Agregar un evento submit al formulario
  form.addEventListener('submit', function (event) {
    // Prevenir el comportamiento por defecto del formulario (evitar recarga)
    event.preventDefault();


    //ingresar usuarios a la base de datos
    const nombre = document.querySelector("#nombre").value.trim();
    const apellido = document.querySelector("#apellido").value.trim();
    const documento = document.querySelector("#documento").value.trim();
    const tipoDoc = document.querySelector("#tipoDocumento").value;
    const correo = document.querySelector("#correo").value.trim();
    const direccion = document.querySelector("#direccion").value.trim();

    console.log(nombre)


    const regexNombreApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
    const regexDocumento = /^[0-9]+$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexDireccion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]+$/;

    // Mensajes de error
    let mensajesError = [];

    // Validar nombre
    if (!regexNombreApellido.test(nombre)) {
      mensajesError.push("El nombre debe contener solo letras y no debe tener espacios al inicio.");
    }

    // Validar apellido
    if (!regexNombreApellido.test(apellido)) {
      mensajesError.push("El apellido debe contener solo letras y no debe tener espacios al inicio.");
    }

    // Validar documento
    if (!regexDocumento.test(documento)) {
      mensajesError.push("El documento debe contener solo números y no debe tener espacios al inicio.");
    }

    // Validar tipo de documento
    if (tipoDoc === "") {
      mensajesError.push("Debe seleccionar un tipo de documento.");
    }

    // Validar correo
    if (!regexCorreo.test(correo)) {
      mensajesError.push("Debe ingresar un correo electrónico válido y no debe tener espacios al inicio.");
    }

    // Validar dirección
    if (!regexDireccion.test(direccion)) {
      mensajesError.push("La dirección debe contener solo letras, números y espacios, y no debe tener espacios al inicio.");
    }

    let usuario = {};
    if (mensajesError.length > 0) {
      alert(mensajesError.join("\n"));
    } else {
      usuario = {
        "id": 2,
        "nombre": nombre,
        "apellido": apellido,
        "documento": documento,
        "tipo_doc": parseInt(tipoDoc),
        "correo": correo,
        "direccion": direccion
      }
      fetch("http://127.0.0.1:3000/users", {
        method: "POST",
        body: JSON.stringify(usuario)
      })
    }


    const btnEliminar = document.querySelector('#btnEliminar');
    const idEliminarInput = document.querySelector('#idEliminar');
    
    btnEliminar.addEventListener('click', function () {
      const idEliminar = idEliminarInput.value.trim();

      if (idEliminar === "") {
        alert("Por favor, ingrese un ID de usuario para eliminar.");
        return;
      }

      console.log(filaAEliminar)

      if (filaAEliminar) {
        fetch(`http://127.0.0.1:3000/users/:id.${filaAEliminar}`, {
          method: "DELETE",
        })
      } else {
        alert(`No se encontró ningún usuario con el ID ${idEliminar}.`);
      }

      // Limpiar el campo de entrada
      idEliminarInput.value = "";
    });
    

  })
}

database();

