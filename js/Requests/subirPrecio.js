const popupPrecios = document.createElement("div");

function generarPopupDePrecios() {
    popupPrecios.className = "modal";
    popupPrecios.id = "popupAumentarPrecios";

    let popupCentralPrecios = document.createElement("div");
    popupCentralPrecios.className = "modal-content";

    let contenedorDeLosDatos = document.createElement("div");
    contenedorDeLosDatos.className = "container-precioNuevo";

    let contenedorDeBotones = document.createElement("div");
    contenedorDeBotones.className = "container-precioNuevoBotones";

    let descripcion = document.createElement("p");
    descripcion.textContent = "Ingrese el porcentaje de ajuste de precios";

    let porcentajeDeAumentoNuevo = document.createElement("input");
    porcentajeDeAumentoNuevo.id = "porcentajeNuevo";
    porcentajeDeAumentoNuevo.type = "number";  // Asegúrate de que solo se ingresen números

    let actualizar = document.createElement("button");
    actualizar.textContent = "Actualizar";

    const cancelar = document.createElement("button");
    cancelar.textContent = "Cancelar";

    // Define la función cerrarAumentoPrecios afuera
    function cerrarAumentoPrecios() {
        let popup = document.getElementById("popupAumentarPrecios");
        if (popup) {
            popup.style.display = 'none';
        }
    }

    // Asigna la función cerrarAumentoPrecios al botón cancelar
    cancelar.onclick = cerrarAumentoPrecios;

    contenedorDeLosDatos.appendChild(descripcion);
    contenedorDeLosDatos.appendChild(porcentajeDeAumentoNuevo);
    contenedorDeBotones.appendChild(actualizar);
    contenedorDeBotones.appendChild(cancelar);
    contenedorDeLosDatos.appendChild(contenedorDeBotones);
    popupCentralPrecios.appendChild(contenedorDeLosDatos);
    popupPrecios.appendChild(popupCentralPrecios);
    document.body.appendChild(popupPrecios);

    actualizar.addEventListener('click', aumentarPorcentaje);

    function aumentarPorcentaje() {
        let aumentoNuevo = parseInt(document.getElementById('porcentajeNuevo').value);

        fetch(urlProductos, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: aumentoNuevo // Asegúrate de enviar el body como JSON
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`No se pudo realizar la transacción: ${response.statusText}`);
                }
                generarConfirmaciones("Precios actualizados correctamente.");
                cargarProductos();
                cerrarAumentoPrecios(); // Usar la misma función para cerrar el popup
            })
            .catch(error => {
                console.error('Hubo un problema con la operación:', error);
            });

    }

    popupPrecios.style.display = "none";
}

generarPopupDePrecios();

function desplegarPopupDePrecios(){
    closeNav();
    popupPrecios.style.display = "block";
}