const urlProductos = 'https://go-postgresql-restapi-toek.onrender.com/productos';

let productosPrueba = []; //Lugar donde voy a añadir los productos que me traiga la API
function cargarProductos() {
    let productosContainer = document.getElementById("listaProductos");
    productosContainer.innerHTML = "";
    fetch(urlProductos)
        .then(response => response.json())
        .then(data => {
            productosPrueba = data;
            generarProductos(productosPrueba)
        })
        .catch(error => console.error('Error al cargar productos:', error));
}

function generarProductos(listaProductos) {
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
    if (!marcas.includes(producto.Marca)) {
        marcas.push(producto.Marca);
    }

    if (!tipos.includes(producto.Tipo)) {
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
                <a href="#" onclick="eliminarProducto(${producto.ID})"><i class="fa-solid fa-trash"></i></a>
                <a href="#" onclick="mostrarModalConfiguracion(${producto.ID})"><i class="fa-solid fa-gear"></i></a>
                <a href="#" onclick="mostrarCompraManual('${producto.CodigoUnico}')"><i class="fa-solid fa-bag-shopping"></i></a>
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

    let template = ``;

    template = `
        <li class="producto" id="${producto.codigounico}">
            <div class="producto-titulo">${producto.nombre}</div>
            <div class="producto-caracteristicas">Tipo: ${producto.tipo} - Marca: ${producto.marca}</div>
            <div class="producto-caracteristicas">Descripcion: ${producto.descripcion}</div>
            <div class="producto-caracteristicas">Stock Disponible: ${producto.stockdisponible}</div>
            <div class="producto-caracteristicas">Stock Minimo: ${producto.stockminimo}</div>
        </li>`;
    return template;
}

function abrirPopup() {
    popup.style.display = 'block';
}

function cerrarPopup() {
    popup.style.display = 'none';

}

cargarProductos();
