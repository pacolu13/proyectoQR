function desplegarPopupDePrecios() {

    let popupPrecios = document.createElement("div");
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

    let cancelar = document.createElement("button");
    cancelar.textContent = "Cancelar";

    contenedorDeLosDatos.appendChild(descripcion);
    contenedorDeLosDatos.appendChild(porcentajeDeAumentoNuevo);
    contenedorDeBotones.appendChild(actualizar);
    contenedorDeBotones.appendChild(cancelar);
    contenedorDeLosDatos.appendChild(contenedorDeBotones);
    popupCentralPrecios.appendChild(contenedorDeLosDatos);
    popupPrecios.appendChild(popupCentralPrecios);

    popupPrecios.style.display = "block";

    document.body.appendChild(popupPrecios);

    // Aquí están las funciones correctas para los eventos onclick
    cancelar.addEventListener('click', cerrarAumentoPrecios);
    actualizar.addEventListener('click', aumentarPorcentaje);

    function cerrarAumentoPrecios() {
        let popup = document.getElementById("popupAumentarPrecios");
        popup.style.display = "none";
    };

    function aumentarPorcentaje() {
        let aumentoNuevo = parseInt(document.getElementById('porcentajeNuevo').value);

        fetch(urlProductos, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: aumentoNuevo
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`No se pudo realizar la transacción: ${response.statusText}`);
                }
                cargarProductos();
                popupPrecios.style.display = "none";
            })
            .catch(error => {
                console.error('Hubo un problema con la operación:', error);
            });
    }
}

