function cargarProductos(listaProductos) {
    const container = document.querySelector('.lista-productos');
    container.innerHTML = "";
    listaProductos.forEach(element => {
        let card = document.createElement('li');
        card.innerHTML = crearProducto(element);

        container.appendChild(card);
    });
}

const marcas = [];
const tipos = [];


function crearProducto(producto) {

    if (!marcas.includes(producto.Marca)) {
        marcas.push(producto.Marca);
    }

    if (!tipos.includes(producto.Tipo)) {
        tipos.push(producto.Tipo);
    }

    cargarFiltrosMarca();
    cargarFiltrosTipo();

    let template = `
    <li class="producto" id="${producto.ID}">
        <div class="nombre-producto">${producto.Nombre} - ${producto.Tipo} - ${producto.Marca}</div>
        <div class="stock-Disponible">Stock Disponible: ${producto.StockDisponible}</div>
        <div class="stock-productoMinimo">Stock Minimo: ${producto.StockMinimo}</div>
        <div class="button-trash">
        <a href="#" onclick="eliminarProducto(${producto.ID})"><i class="fa-solid fa-trash"></i></a>
        <a href="#" onclick="actualizarProducto(${producto.ID})"><i class="fa-solid fa-gear"></i></a>
        </div>
    </li>`;
    return template;
}

function cargarProductosQR(listaProductos) {
    const container = document.querySelector('.productos-qr');
    listaProductos.forEach(element => {
        let card = document.createElement('li');
        card.innerHTML = crearProductosQR(element);

        container.appendChild(card);
    });
}

function crearProductosQR(producto) {

    let template = `
    <li class="producto-qr" id="${producto.ID}">
        <div class="nombre-producto">${producto.Nombre} - ${producto.Tipo} - ${producto.Marca}</div>
        <div class="stock-Disponible">Stock Disponible: ${producto.StockDisponible}</div>
        <div class="stock-productoMinimo">Stock Minimo: ${producto.StockMinimo}</div>
        <div class="button-trash">
        <a href="#" onclick="eliminarProducto(${producto.ID})"><i class="fa-solid fa-trash"></i></a>
        <a href="#" onclick="actualizarProducto(${producto.ID})"><i class="fa-solid fa-gear"></i></a>
        </div>
    </li>`;
    return template;
}

