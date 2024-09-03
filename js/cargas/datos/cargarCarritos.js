
const urlCarritos = 'https://go-postgresql-restapi-toek.onrender.com/carrito';

fetch(urlCarritos)
    .then(response => response.json()) // Parsear el JSON
    .then(data => {

        cargarVentas(data);

        data.forEach(venta => {
            cargarVentasUnitarias(venta.VentasUnitarias);
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
        <div class="carrito-id">NRO VENTA: ${venta.CodigoCarrito}</div>
        <div class="carrito-monto">MONTO TOTAL: $${venta.MontoTotal}</div>
        <div class="carrito-monto">FECHA DE EMISION: ${venta.FechaVenta}</div>
        <a href="#" onclick="abrirPestaña('${venta.CodigoCarrito}')">Ver detalle</a>
    </div>`;
    return template;
}

function crearVentaUnitaria(ventaUnitaria) {
    let template = `
    <div class="modal-venta-unitaria" id="${ventaUnitaria.CodigoUnicoProducto}">
        <div class="modal-venta-unitaria-medio">
            <div class="venta-unitaria">
                <div class="producto-id">Codigo de producto: ${ventaUnitaria.CodigoUnicoProducto}</div>
                <div class="producto-cantidad">Cantidad: ${ventaUnitaria.Cantidad}</div>
                <div class="producto-monto">Monto: $${ventaUnitaria.Monto}</div>
            </div>
    </div>`;
    return template;
}
