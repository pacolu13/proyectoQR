const urlVentas = 'https://go-postgresql-restapi-tswy.onrender.com/ventas';

fetch('json/ventas.JSON')
    .then(response => response.json()) // Parsear el JSON
    .then(data => {
        // data es un array de ventas, iteramos sobre cada venta
        data.forEach(venta => {
            cargarVentas([venta]); // Pasamos la venta como un array para mantener la estructura
            cargarVentasUnitarias(venta.ventas); // Pasamos la lista de productos a cargarVentasUnitarias
        });
    })
    .catch(error => console.error('Error al leer el archivo JSON:', error));

function cargarVentas(listaVentas) {
    const container = document.querySelector('.lista-ventas');
    listaVentas.forEach(venta => {
        let card = document.createElement('li');
        card.innerHTML = crearVenta(venta);

        container.appendChild(card);
    });
}

function cargarVentasUnitarias(listaVentasUnitarias) {
    const container = document.querySelector('.modal-VentaUnitaria');
    listaVentasUnitarias.forEach(element => {
        let card = document.createElement('div');
        card.innerHTML = crearVentaUnitaria(element);

        container.appendChild(card);
    });
}

function crearVenta(venta) {
    let template = `
    <div class="carrito">
        <div class="carrito-id">Venta: ${venta.ventaID}</div>
        <div class="carrito-monto">Monto total: ${venta.MontoTotal}</div>
        <a href="#" onclick="abrirPestaña(modalVentaUnitaria)">Ver resumen</a>
    </div>`;
    return template;
}

function crearVentaUnitaria(ventaUnitaria){
   let template =  `
   <div class="venta-unitaria">
        <div class="producto-id">${ventaUnitaria.productoID}</div>
        <div class="producto-precio">${ventaUnitaria.Precio}</div>
        <div class="producto-cantidad">${ventaUnitaria.cantidad}</div>
        <div class="producto-monto">${ventaUnitaria.Monto}</div>
        <a href="#" onclick="cerrarPestaña(modalVentaUnitaria)">Cerrar</a>
    </div>`;
   return template;
}
