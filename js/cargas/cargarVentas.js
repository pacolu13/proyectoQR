const urlVentas = 'https://go-postgresql-restapi-tswy.onrender.com/ventas';

fetch('json/ventas.JSON')
    .then(response => response.json()) // Parsear el JSON
    .then(data => {

        cargarVentas(data);

        data.forEach(venta => {
            cargarVentasUnitarias(venta.ventas);
        })
    });

function cargarVentas(listaVentas) {
    const ventas = document.querySelector('.lista-ventas');
    listaVentas.forEach(venta => {
        let card = document.createElement('li');
        card.innerHTML = crearVenta(venta);

        ventas.appendChild(card);
    });
}

function cargarVentasUnitarias(listaVentasUnitarias) {
    const VentaUnitaria = document.querySelector('.modal-ventaUnitaria');
    listaVentasUnitarias.forEach(venta => {
        let card = document.createElement('div');
        card.innerHTML = crearVentaUnitaria(venta);
        VentaUnitaria.appendChild(card);
    });
}

function crearVenta(venta) {
    let template = `
    <div class="carrito">
        <div class="carrito-id">NRO VENTA: ${venta.ventaID}</div>
        <div class="carrito-monto">MONTO TOTAL: $${venta.MontoTotal}</div>
        <a href="#" onclick="abrirPestaña(${venta.ventaID})">Ver detalle</a>
    </div>`;
    return template;
}

function crearVentaUnitaria(ventaUnitaria) {
    let template = `
    <div class="modal-venta-unitaria" id="${ventaUnitaria.productoID}">
        <div class="modal-venta-unitaria-medio">
            <div class="venta-unitaria">
                <div class="producto-id">Codigo de producto: ${ventaUnitaria.productoID}</div>
                <div class="producto-precio">Precio: $${ventaUnitaria.Precio}</div>
                <div class="producto-cantidad">Cantidad: ${ventaUnitaria.cantidad}</div>
                <div class="producto-monto">Monto: ${ventaUnitaria.Monto}</div>
            </div>
    </div>`;
    return template;
}
