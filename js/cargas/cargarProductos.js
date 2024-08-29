function cargarProductos(listaProductos) {
    const container = document.querySelector('.lista-productos');
    container.innerHTML = "";
    listaProductos.forEach(element => {
        let card = document.createElement('li');
        card.innerHTML = createProduct(element);

        container.appendChild(card);
    });
}

function createProduct(producto) {

    let template = `
    <li class="producto">
        <div class="nombre-producto">${producto.Nombre} - ${producto.Tipo} - ${producto.Marca}</div>
        <div class="stock-producto">${producto.StockDisponible} - ${producto.StockMinimo}</div>
        <div class="button-trash">
        <a href="#" onclick="eliminarProducto(${producto.ID})"><i class="fa-solid fa-trash"></i></a>
        <a href="#" onclick="actualizarProducto(${producto.ID})"><i class="fa-solid fa-gear"></i></a>
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