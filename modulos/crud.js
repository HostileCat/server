const agregarUsuario = function(usuarios) {
    const form = document.querySelector('#form');
    let errorExistente = document.querySelector("#errorCorreo");

    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const documento = document.querySelector("#documento");
    const telefono = document.querySelector("#telefono");
    const tipoDoc = document.querySelector("#tipoDocumento");
    const correo = document.querySelector("#correo");
    const direccion = document.querySelector("#direccion");
    
    form.addEventListener('submit', function (event) {
        // Prevenir el comportamiento por defecto del formulario (evitar recarga)
        
        event.preventDefault();
    
        //ingresar usuarios a la base de datos
        
        let idUsuario = usuarios[usuarios.length - 1];  
    
        if (idUsuario === null || usuarios.length === 0) {
          idUsuario = 0;
        } else{
          idUsuario = idUsuario.id;
        }
        console.log(idUsuario)
    
        
        let usuario = {};
    
        if (errorExistente === null) {
          usuario = {
            "id": `${parseInt(idUsuario) + 1}`,
            "nombre": nombre.value,
            "apellido": apellido.value,
            "telefono": parseInt(telefono.value),
            "documento": parseInt(documento.value),
            "tipo_doc": parseInt(tipoDoc.value),
            "correo": correo.value,
            "direccion": direccion.value
          }
          fetch("http://127.0.0.1:3000/users", {
            method: "POST",
            body: JSON.stringify(usuario)
          })
        } 
    })
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

const editarUsuario = function(usuarios) {
    const nombre = document.querySelector("#nombreModal");
    const apellido = document.querySelector("#apellidoModal");
    const documento = document.querySelector("#documentoModal");
    const telefono = document.querySelector("#telefonoModal");
    const tipoDoc = document.querySelector("#tipoDocumentoModal");
    const correo = document.querySelector("#correoModal");
    const direccion = document.querySelector("#direccionModal");
}

export{ agregarUsuario, eliminarUsuario, editarUsuario }