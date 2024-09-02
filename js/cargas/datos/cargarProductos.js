let productosPrueba = []; //Lugar donde voy a añadir los productos que me traiga la API

fetch('json/productos.JSON')
    .then(response => response.json())
    .then(data => {
        productosPrueba = data;
    })
    .catch(error => console.error('Error al cargar productos:', error));

function cargarProductos(listaProductos) {
    const container = document.querySelector('.lista-productos');
    container.innerHTML = "";
    listaProductos.forEach(element => {
        let card = document.createElement('li');
        card.innerHTML = crearProducto(element);

        //crear model-configuration para cada producto
        cargarConfiguracion(productosPrueba, element);

        container.appendChild(card);
    });
}


const marcas = [];
const tipos = [];

function crearProducto(producto) {
    if(!marcas.includes(producto.Marca)){
        marcas.push(producto.Marca);
    }

    if(!tipos.includes(producto.Tipo)){
        tipos.push(producto.Tipo);
    }
    
    filtrarTipo();
    filtrarMarca();

    let template = ``;

    let signoExclamacion = "";

    if (producto.stockMinimo === 0) {
        signoExclamacion = `<i class="fa-solid fa-exclamation"></i>`;
    };

    template = `
        <li class="producto" id="${producto.codigoUnico}">
            <div class="producto-titulo">${producto.Nombre}</div>
            <div class="producto-caracteristicas">Tipo: ${producto.Tipo} - Marca: ${producto.Marca}</div>
            <div class="producto-caracteristicas">Descripcion: ${producto.Descripcion}</div>
            <div class="producto-caracteristicas">Stock Disponible: ${producto.StockDisponible}</div>
            <div class="producto-caracteristicas">Stock Minimo: ${producto.StockMinimo} 
                <a href="#" class="exclamation-button" onclick="abrirPopup()">${signoExclamacion}</a>
            </div>
            <div class="producto-buttons">
                <a href="#" onclick="eliminarProducto(${producto.codigoUnico})"><i class="fa-solid fa-trash"></i></a>
                <a href="#" onclick="mostrarModalConfiguracion(${producto.codigoUnico})"><i class="fa-solid fa-gear"></i></a>
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

function crearProductosQR(libro) {

    let template = ``;

    template = `
        <li class="producto" id="${producto.codigoUnico}">
            <div class="producto-titulo">${producto.Nombre}</div>
            <div class="producto-caracteristicas">Tipo: ${producto.Tipo} - Marca: ${producto.Marca}</div>
            <div class="producto-caracteristicas">Descripcion: ${producto.Descripcion}</div>
            <div class="producto-caracteristicas">Stock Disponible: ${producto.StockDisponible}</div>
            <div class="producto-caracteristicas">Stock Minimo: ${producto.StockMinimo}</div>
        </li>`;
    return template;
}

function abrirPopup() {
    popup.style.display = 'block';
}

function cerrarPopup() {
    popup.style.display = 'none';

}