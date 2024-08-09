const agregarUsuario = function(usuarios) {
    let errorExistente = document.querySelector("#errorCorreo");

    const userId = document.querySelector("#userId");
    const nombreUser = document.querySelector("#nombre");
    const apellidoUser = document.querySelector("#apellido");
    const documentoUser = document.querySelector("#documento");
    const telefonoUser = document.querySelector("#telefono");
    const tipoDocUser = document.querySelector("#tipoDocumento");
    const correoUser = document.querySelector("#correo");
    const direccionUser = document.querySelector("#direccion");
    
    
        
       
    
        //ingresar usuarios a la base de datos
        
        let idUsuario = usuarios[usuarios.length - 1];  
    
        if (idUsuario === null || usuarios.length === 0) {
          idUsuario = 0;
        } else{
          idUsuario = idUsuario.id;
        }

        
    
        
        let usuario = {};
    
        if (errorExistente === null) {
          usuario = {
            "id": `${parseInt(idUsuario) + 1}`,
            "nombre": nombreUser.value,
            "apellido": apellidoUser.value,
            "telefono": parseInt(telefonoUser.value),
            "documento": parseInt(documentoUser.value),
            "tipo_doc": tipoDocUser.value,
            "correo": correoUser.value,
            "direccion": direccionUser.value
          }
          fetch("http://127.0.0.1:3000/users", {
            method: "POST",
            body: JSON.stringify(usuario)
          })
        } 
    
}

const editarUsuario = function(usuarios) {
  // const nombre = document.querySelector("#nombreModal");
  // const apellido = document.querySelector("#apellidoModal");
  // const documento = document.querySelector("#documentoModal");
  // const telefono = document.querySelector("#telefonoModal");
  // const tipoDoc = document.querySelector("#tipoDocumentoModal");
  // const correo = document.querySelector("#correoModal");
  // const direccion = document.querySelector("#direccionModal");


}

const eliminarUsuario = function(listaEliminar) {
    if (listaEliminar !== null) {

        listaEliminar.forEach(eliminar => {
            
            eliminar.addEventListener('click', function (event){
                event.preventDefault();
                let id = eliminar.parentElement.parentElement.firstChild.textContent;
            
                fetch(`http://127.0.0.1:3000/users/${id}`, {
                  method: "DELETE",
                  
                })
              })
        });

        
      }
}



export{ agregarUsuario, eliminarUsuario, editarUsuario }