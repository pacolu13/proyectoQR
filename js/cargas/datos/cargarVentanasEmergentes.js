const modalError = document.createElement("div");
const modalConfirmacion = document.createElement("div");


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

function generarConfirmaciones(mensajeConfirmacion) {
    modalConfirmacion.innerHTML = "";
    modalConfirmacion.classList.add("modal-error");

    let contenedorConfirmacion = document.createElement("div");
    contenedorConfirmacion.classList.add("modal-content-error"); 

    // Generar una ID aleatoria
    let idConfirmacion = 'error_' + Math.random().toString(36).substr(2, 9);
    contenedorConfirmacion.id = idConfirmacion;

    let confirmacion = document.createElement("div");
    confirmacion.classList.add("modal-content-error-message"); 
    confirmacion.id = idConfirmacion;  // Asignar la ID correctamente
    confirmacion.innerHTML = mensajeConfirmacion;

    // Usar el valor de idError en el onclick
    confirmacion.innerHTML += `<a href='#' onclick='cerrarPestañaConfirmacion()'><i class="fa-regular fa-circle-xmark"></i></a>`;
   
    modalConfirmacion.style.display = "block";  // Asegurar que el modal se muestre

    contenedorConfirmacion.appendChild(confirmacion);
    modalConfirmacion.appendChild(contenedorConfirmacion);
    document.body.appendChild(modalConfirmacion);
}

function cerrarPestañaConfirmacion(){
    modalConfirmacion.style.display = "none";
}



