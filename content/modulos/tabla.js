export function listarUsuarios(usuarios, documentos) {
    const $template = document.querySelector("#users").content;
    const tabla = document.querySelector("#tablaUsuarios");
    const fragmento = document.createDocumentFragment();
    console.log(documentos);
    

    usuarios.forEach(prop => {
        // const fila = document.createElement("tr");

        let documento = documentos.find((doc)=> doc.id === prop.tipo_doc);
    
        

        $template.querySelector("tr").id = `user_${prop.id}`;
        $template.querySelector(".first_name").textContent = prop.nombre;
        $template.querySelector(".last_name").textContent = prop.apellido;
        $template.querySelector(".phone").textContent = prop.telefono;
        $template.querySelector(".address").textContent = prop.direccion;
        $template.querySelector(".type_id").textContent = documento.nombre;
        $template.querySelector(".documento").textContent = prop.documento;
        $template.querySelector(".email").textContent = prop.correo;
        $template.querySelector(".edit").setAttribute("data-id", prop.id);
        $template.querySelector(".delete").setAttribute("data-id", prop.id);
        let clone = document.importNode($template, true);
        fragmento.appendChild(clone);

        // const celdaID = document.createElement("td")
        // const celdaNombre = document.createElement("td");
        // const celdaApellido = document.createElement("td");
        // const celdaTelefono = document.createElement("td");
        // const celdaTipoDoc = document.createElement("td");
        // const celdaDocumento = document.createElement("td");
        // const celdaCorreo = document.createElement("td");
        // const celdaDireccion = document.createElement("td");
        
        
        // const celdaAcciones = document.createElement("td");
        // const botonEditar = document.createElement("button");
        // const botonEliminar = document.createElement("button");

        
        // celdaID.textContent = prop.id;
        // celdaNombre.textContent = prop.nombre;
        // celdaApellido.textContent = prop.apellido;
        // celdaTelefono.textContent = prop.telefono;
        // celdaTipoDoc.textContent = listaDoc[prop.tipo_doc - 1];
        // celdaDocumento.textContent = prop.documento;
        // celdaCorreo.textContent= prop.correo;
        // celdaDireccion.textContent = prop.direccion;


        // botonEditar.textContent = "Editar";
        // botonEditar.setAttribute("class", "editButton");
        // botonEditar.setAttribute("id", "editButton");
        // botonEliminar.textContent = "Eliminar";
        // botonEliminar.setAttribute("class", "deleteButton");
        // botonEliminar.setAttribute("id", "deleteButton");


        // celdaAcciones.appendChild(botonEditar);
        // celdaAcciones.appendChild(botonEliminar);

        

        // fila.appendChild(celdaID);
        // fila.appendChild(celdaNombre);
        // fila.appendChild(celdaApellido);
        // fila.appendChild(celdaTelefono);
        // fila.appendChild(celdaTipoDoc);
        // fila.appendChild(celdaDocumento);
        // fila.appendChild(celdaCorreo);
        // fila.appendChild(celdaDireccion);
        // fila.appendChild(celdaAcciones);
    

        // tbody.prepend(fila);
    })
    tabla.querySelector("tbody").appendChild(fragmento);
}