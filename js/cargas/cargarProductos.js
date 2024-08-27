const apiUrl = 'https://go-postgresql-restapi-tswy.onrender.com/productos';

// Leer el archivo JSON usando fetch
fetch(apiUrl)
    .then(response => response.json()) // Parsear el JSON
    .then(data => loadProducts(data)) // Pasar los datos al método de muestra
    .catch(error => console.error('Error al leer el archivo JSON:', error));

function loadProducts(listaProductos) {
    const container = document.querySelector('.lista-productos');
    listaProductos.forEach(element => {
        let card = document.createElement('li');
        card.innerHTML = createProduct(element);

        container.appendChild(card);
    });
}

function createProduct(producto) {

    let template = `
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${producto.Nombre} - ${producto.Tipo} </div>
      Stock: ${producto.StockDisponible}
      <div>Stock Minimo: ${producto.StockMinimo}</div>
    </div>
    <div class="button-trash">
        <a href="#" onclick="eliminarProducto(${producto.CodigoUnico})"><i class="fa-solid fa-trash"></i></a>
        <a href="#" onclick="actualizarProducto(${producto.CodigoUnico})"><i class="fa-solid fa-gear"></i></a>
    </div>
    </li>`;
    return template;
}

function loadProductsGreen(listaProductos) {
    const container = document.querySelector('.productos-qr');
    listaProductos.forEach(element => {
        let card = document.createElement('li');
        card.innerHTML = createProductGreen(element);

        container.appendChild(card);
    });
}

function createProductGreen(producto) {

    let template = `
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${producto.Nombre}</div>
      ${producto.Tipo}
    </div>
    <span class="badge bg-success rounded-pill">${producto.Cantidad}</span>
    </li>`;
    return template;
}
