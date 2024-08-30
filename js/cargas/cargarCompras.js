const urlComprasAutomaticas = 'https://go-postgresql-restapi-tswy.onrender.com/compra';

fetch(urlComprasAutomaticas)
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
    let color = "";
    if(compra.fueRealizada){
        color = "";
    }
    else{
        color = "";
    }
    let template = `
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Codigo de producto: ${compra.codigoUnico} - ${compra.fecha} </div>
      Stock comprado: ${compra.cantidad}
    </div>
    </li>`;
    return template;
}