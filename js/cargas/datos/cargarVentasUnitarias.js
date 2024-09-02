let ventas = [];

fetch('json/ventas.JSON')
    .then(response => response.json()) // Parsear el JSON
    .then(data => {

        ventas = data;

        data.forEach(venta => {
            cargarVentasUnitarias(venta.VentasUnitarias);
        })
    });

function abrirPestaña(styleID) {
    // Crear un div para el overlay
    let overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");

    // Crear un div para contener las ventas unitarias
    let modalVenta = document.createElement("div");
    modalVenta.classList.add("modal-venta");

    let enlace = document.createElement("a");
    enlace.href = "#"; // Puedes configurar el href si es necesario
    enlace.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'; // Usa innerHTML para insertar el icono
    enlace.onclick = cerrarPestaña(styleID);
    modalVenta.appendChild(enlace);
    let modalTituloVenta = document.createElement("div");
    modalTituloVenta.classList.add("modal-venta-titulo");

    modalVenta.appendChild(modalTituloVenta);

    let tituloVenta = document.createElement("p");
    tituloVenta.innerHTML = "<b>Detalle de venta:</b>"
    modalTituloVenta.appendChild(tituloVenta);

    ventas.forEach(venta => {
        if (venta.CodigoCarrito === styleID) {
            // Selecciona todos los contenedores con la clase 'modal-ventaUnitaria'
            let contenedoresVentasUnitarias = document.querySelectorAll('.modal-ventaUnitaria');

            venta.VentasUnitarias.forEach(ventaUnitaria => {
                // Buscar el elemento con el ID correspondiente dentro de cada contenedor
                contenedoresVentasUnitarias.forEach(contenedor => {
                    let modalConfirmacion = contenedor.querySelector(`[id="${ventaUnitaria.CodigoUnicoProducto}"]`);
                    if (modalConfirmacion) {
                        // Clonar y agregar la venta unitaria al contenedor correspondiente en modalVenta
                        let clon = modalConfirmacion.cloneNode(true);
                        clon.style.display = "block"; // Asegurarte de que se muestre
                        modalVenta.appendChild(clon);
                    } else {
                        console.warn(`Elemento con ID ${ventaUnitaria.productoID} no encontrado.`);
                    }
                });
            });
        }
    });

    // Añadir el modalVenta al overlay
    overlay.appendChild(modalVenta);
    document.body.appendChild(overlay);

    // Mostrar el modal y el overlay
    overlay.classList.add("show");
    modalVenta.classList.add("show");

    // Cerrar el modal al hacer clic en el overlay
    overlay.addEventListener("click", () => {
        overlay.classList.remove("show");
        modalVenta.classList.remove("show");
        document.body.removeChild(overlay);
    });
}

function cerrarPestaña(styleID) {

    const modalConfirmacion = document.getElementById(styleID);
    modalConfirmacion.style.display = 'none'; // Oculta el modal
    
}