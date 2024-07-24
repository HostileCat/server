export function listarUsuarios(usuarios, listaDoc) {
    const tbody = document.querySelector("#cuerpo")

    usuarios.forEach(prop => {
        const fila = document.createElement("tr");

        const celdaID = document.createElement("td")
        const celdaNombre = document.createElement("td");
        const celdaApellido = document.createElement("td");
        const celdaTelefono = document.createElement("td");
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
        celdaTelefono.textContent = prop.telefono;
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
        fila.appendChild(celdaTelefono);
        fila.appendChild(celdaTipoDoc);
        fila.appendChild(celdaDocumento);
        fila.appendChild(celdaCorreo);
        fila.appendChild(celdaDireccion);
        fila.appendChild(celdaAcciones);
    

        tbody.prepend(fila);


    })
}