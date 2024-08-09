const campoVacio = function (event, form) {
    event.preventDefault();

    const inputs = document.querySelectorAll(form);

    let confirmacion = true;
    
    inputs.forEach(input => {
        if (input.value == ""){
            input.classList.remove("correcto")
            input.classList.add("incorrecto");
            confirmacion = false;
            console.log(confirmacion)
        } else{
            console.log(confirmacion)
            input.classList.remove("incorrecto")
            input.classList.add("correcto");
        }
    })

    return confirmacion

    
}

export { campoVacio }