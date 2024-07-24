export function tipoDocumento(documentos) {
    let listaDoc = [];
    const select = document.querySelector("#tipoDocumento");

    // agregar opciones al select
    documentos.forEach(tipo => {
        const option = document.createElement("option");
        option.setAttribute("value", tipo.id);
        option.textContent = tipo.nombre;
        select.appendChild(option);

        listaDoc.push(tipo.nombre)
    })

    return listaDoc;
}