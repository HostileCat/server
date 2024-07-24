const validarLetras = function(event) {
    const regexLetras = /^[a-zA-ZñÑ\ ]{0,}$/

    if (!(regexLetras.test(event.key))) {
      event.preventDefault()
    } 
}

const validarNumeros = function(event) {
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

      let errorExistente = document.querySelector("#errorDocumento");
      
      if (documento.value.length >= 8 && documento.value.length <= 10) {
        documento.classList.remove("incorrecto")
        documento.classList.add("correcto")
        if (errorExistente !== null) {
          padre.removeChild(errorExistente)
        }
        

      }else{
        documento.classList.remove("correcto")
        documento.classList.add("incorrecto")
        if (errorExistente === null) {
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

      let errorExistente = document.querySelector("#errorTelefono");
      
      if (telefono.value.length >= 8 && telefono.value.length <= 10) {
        telefono.classList.remove("incorrecto")
        telefono.classList.add("correcto")
        if (errorExistente !== null) {
          padre.removeChild(errorExistente)
        }
        

      }else{
        telefono.classList.remove("correcto")
        telefono.classList.add("incorrecto")
        if (errorExistente === null) {
          padre.appendChild(mensajeError)
        }
      }
    }

    
}


const cantidadLetras = (event, tipo) =>{
    if (tipo === "nombre" ) {
      //Se crea el mensaje de error
      let mensajeError = document.createElement("span")
      mensajeError.setAttribute("id", "errorNombre")
      mensajeError.setAttribute("class", "mensajeError")
      mensajeError.textContent = "El nombre debe tener entre 3 y 40 caracteres"
      const padre = nombre.parentElement

      let errorExistente = document.querySelector("#errorNombre");
      
      if (nombre.value.length >= 3 && nombre.value.length <= 40) {
        nombre.classList.remove("incorrecto")
        nombre.classList.add("correcto")
        if (errorExistente !== null) {
          padre.removeChild(errorExistente)
        }
        

      }else{
        nombre.classList.remove("correcto")
        nombre.classList.add("incorrecto")
        if (errorExistente === null) {
          padre.appendChild(mensajeError)
        }
      }
      
    }else if(tipo === "apellido"){

      //Se crea el mensaje de error
      let mensajeError = document.createElement("span")
      mensajeError.setAttribute("id", "errorApellido")
      mensajeError.setAttribute("class", "mensajeError")
      mensajeError.textContent = "El nombre debe tener entre 3 y 40 caracteres"
      const padre = apellido.parentElement

      let errorExistente = document.querySelector("#errorApellido");
      
      if (apellido.value.length >= 3 && apellido.value.length <= 40) {
        apellido.classList.remove("incorrecto")
        apellido.classList.add("correcto")
        if (errorExistente !== null) {
          padre.removeChild(errorExistente)
        }
        

      }else{
        apellido.classList.remove("correcto")
        apellido.classList.add("incorrecto")
        if (errorExistente === null) {
          padre.appendChild(mensajeError)
        }
      }
    } 
}

const validarCorreo = (event) => {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    let mensajeError = document.createElement("span")
      mensajeError.setAttribute("id", "errorCorreo")
      mensajeError.setAttribute("class", "mensajeError")
      mensajeError.textContent = "El correo electronico no es valido"
      const padre = correo.parentElement

      let errorExistente = document.querySelector("#errorCorreo");
      
      if (regexCorreo.test(correo.value)) {
        correo.classList.remove("incorrecto")
        correo.classList.add("correcto")
        if (errorExistente !== null) {
          padre.removeChild(errorExistente)
        }
        

      }else{
        correo.classList.remove("correcto")
        correo.classList.add("incorrecto")
        if (errorExistente === null) {
          padre.appendChild(mensajeError)
        }
      }
}

export { validarLetras, validarNumeros, cantidadNumeros, cantidadLetras, validarCorreo }