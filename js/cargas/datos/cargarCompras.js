
fetch('json/compras.JSON')
    .then(response => response.json()) // Parsear el JSON
    .then(data => cargarCompras(data)) // Pasar los datos al método de muestra
    .catch(error => console.error('Error al leer el archivo JSON:', error));

function cargarCompras(listaCompras) {
    const container = document.querySelector('.lista-compras');
    listaCompras.forEach(element => {
        let card = document.createElement('li');
        card.innerHTML = crearCompra(element);

        container.appendChild(card);
    });
}

function crearCompra(compra) {
    let template = `
    <div class="compra">
      <div>Codigo de producto: ${compra.codigoProducto} </div>
      <div class="compra-caracteristicas">Fecha de emision: ${compra.Fecha} </div>
      <div class="compra-caracteristicas">Stock comprado: ${compra.cantComprada}</div>
      <div class="compra-caracteristicas">Monto total: ${compra.Monto}</div>
      <div class="compra-estado">Estado: ${compra.Estado}</div>
    </div>`;
    return template;
}