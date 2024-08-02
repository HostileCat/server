export const submitDisable = () =>{
    const terminos = document.querySelector("#terminos");
    const submitButton = document.querySelector("#submit");
    if (terminos.checked) {
        submitButton.disabled = false;
    } else{
        submitButton.disabled = true;
    }

    terminos.addEventListener("change", submitDisable);
}

