export function tipoDocumento(documentos) {
    let listaDoc = [];
    const select = document.querySelector("#tipoDocumento");
    const fragmento = document.createDocumentFragment();
    // agregar opciones al select
    documentos.forEach(tipo => {
        const option = document.createElement("option");
        option.setAttribute("value", tipo.id);
        option.textContent = tipo.nombre;
        fragmento.appendChild(option);

        listaDoc.push(tipo.nombre)
    })

    select.appendChild(fragmento);

    return listaDoc;
}