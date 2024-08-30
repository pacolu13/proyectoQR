const urlVentas = 'https://go-postgresql-restapi-tswy.onrender.com/ventas';

fetch(urlVentas)
    .then(response => response.json()) // Parsear el JSON
    .then(data => cargarVentas(data)) // Pasar los datos al método de muestra
    .catch(error => console.error('Error al leer el archivo JSON:', error));

function cargarVentas(listaVentas) {
    const container = document.querySelector('.lista-ventas');
    listaVentas.forEach(element => {
        let card = document.createElement('li');
        card.innerHTML = crearVenta(element);

        container.appendChild(card);
    });
}

function crearVenta(venta) {

    let template = `
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${venta.fecha}</div>
      Codigo Producto: ${venta.codigoUnico}
      <div>Cantidad: ${venta.cantidad}</div>
    </div>
    </li>`;
    return template;
}