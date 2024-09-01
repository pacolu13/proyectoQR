let ventas = [];

fetch('json/ventas.JSON')
    .then(response => response.json()) // Parsear el JSON
    .then(data => {

        ventas = data;

        data.forEach(venta => {
            cargarVentasUnitarias(venta.ventas);
        })
    });

function abrirPestaña(styleID) {
    // Crear un div para el overlay
    let overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");

    // Crear un div para contener las ventas unitarias
    let modalVenta = document.createElement("div");
    modalVenta.classList.add("modal-venta");

    ventas.forEach(venta => {
        if (venta.ventaID === styleID) {
            venta.ventas.forEach(ventaUnitaria => {
                let modalConfirmacion = document.getElementById(ventaUnitaria.productoID);

                if (modalConfirmacion) {
                    modalVenta.appendChild(modalConfirmacion.cloneNode(true));
                } else {
                    console.warn(`Elemento con ID ${ventaUnitaria.productoID} no encontrado.`);
                }
            });
        }
    });

    // Añadir el overlay y el modal al body
    document.body.appendChild(overlay);
    document.body.appendChild(modalVenta);

    // Mostrar el modal y el overlay
    overlay.classList.add("show");
    modalVenta.classList.add("show");

    // Cerrar el modal al hacer clic en el overlay
    overlay.addEventListener("click", () => {
        overlay.classList.remove("show");
        modalVenta.classList.remove("show");
        document.body.removeChild(overlay);
        document.body.removeChild(modalVenta);
    });
}



function cerrarPestaña(styleID) {

    const modalConfirmacion = document.getElementById(styleID);
    modalConfirmacion.style.display = 'none';
}