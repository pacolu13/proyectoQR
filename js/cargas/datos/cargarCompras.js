const urlComprasAutomaticas = 'https://go-postgresql-restapi-tswy.onrender.com/compras';

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
    <div>
      <div>Codigo de producto: ${compra.codigoUnico} - ${compra.fecha} </div>
      Stock comprado: ${compra.cantidad}
    </div>`;
    return template;
}