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

    ventas.forEach(venta => {
        if (venta.ventaID === styleID) {
            venta.ventas.forEach(ventaUnitaria => {
                let modalConfirmacion = document.getElementById(ventaUnitaria.productoID);
                modalConfirmacion.style.display = 'block';
            })
        }
    })
}

function cerrarPestaña(styleID) {

    const modalConfirmacion = document.getElementById(styleID);
    modalConfirmacion.style.display = 'none';
}