const modalError = document.createElement("div");

function generarError(mensajeError) {
    modalError.innerHTML = "";
    modalError.classList.add("modal-error");

    let contenedorError = document.createElement("div");
    contenedorError.classList.add("modal-content-error"); 

    // Generar una ID aleatoria
    let idError = 'error_' + Math.random().toString(36).substr(2, 9);
    contenedorError.id = idError;

    let error = document.createElement("div");
    error.classList.add("modal-content-error-message"); 
    error.id = idError;  // Asignar la ID correctamente
    error.innerHTML = mensajeError;

    // Usar el valor de idError en el onclick
    error.innerHTML += `<a href='#' onclick='cerrarPestañaError()'><i class="fa-regular fa-circle-xmark"></i></a>`;
   
    modalError.style.display = "block";  // Asegurar que el modal se muestre

    contenedorError.appendChild(error);
    modalError.appendChild(contenedorError);
    document.body.appendChild(modalError);
}

function cerrarPestañaError(){
    modalError.style.display = "none";
}



