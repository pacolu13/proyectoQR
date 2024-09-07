const urlProductos = 'https://go-postgresql-restapi-toek.onrender.com/productos';
const productosContainer = document.getElementById("listaProductos");
const containerQR = document.querySelector('.productos-qr');
const popup = document.getElementById('popup');

let productos = []; 

// Función principal para cargar productos
async function cargarProductos() {
    try {
        const response = await fetch(urlProductos);
        productos = await response.json();
        generarProductos(productos);
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

function generarProductos(listaProductos) {
    const Marcas = new Set();
    const Tipos = new Set();
    productosContainer.innerHTML = "";

    listaProductos.forEach(producto => {
        Marcas.add(producto.Marca);
        Tipos.add(producto.Tipo);

        cargarConfiguracion(productos, producto);

        let card = document.createElement('li');
        card.innerHTML = crearProducto(producto);
        productosContainer.appendChild(card);
    });

    // Añadir a las opciones de filtros
    
    filtrarTipo(Array.from(Tipos));
    filtrarMarca(Array.from(Marcas));
}

function crearProducto(producto) {
    let signoExclamacion = producto.StockMinimo === 0 ? '<i class="fa-solid fa-exclamation"></i>' : '';

    return `
        <li class="producto" id="${producto.CodigoUnico}">
            <div class="producto-titulo">${producto.Nombre} - COD: ${producto.CodigoUnico}</div>
            <div class="producto-caracteristicas">Tipo: ${producto.Tipo} - Marca: ${producto.Marca}</div>
            <div class="producto-caracteristicas">Descripción: ${producto.Descripcion}</div>
            <div class="producto-caracteristicas">Precio: $${producto.Precio}</div>
            <div class="producto-caracteristicas">Stock Disponible: ${producto.StockDisponible}</div>
            <div class="producto-caracteristicas">Stock Mínimo: ${producto.StockMinimo} 
                <a href="#" class="exclamation-button" onclick="abrirPopup()">${signoExclamacion}</a>
            </div>
            <div class="producto-buttons">
                <a href="#" onclick="eliminarProducto(${producto.ID})"><i class="fa-solid fa-trash"></i></a>
                <a href="#" onclick="mostrarModalConfiguracion(${producto.ID})"><i class="fa-solid fa-gear"></i></a>
                <a href="#" onclick="mostrarCompraManual('${producto.CodigoUnico}')"><i class="fa-solid fa-bag-shopping"></i></a>
            </div>
        </li>`;
}

function crearProductosQR(producto) {
    return `
        <li class="producto" id="${producto.CodigoUnico}">
            <div class="producto-titulo">${producto.Nombre}</div>
            <div class="producto-caracteristicas">Tipo: ${producto.Tipo} - Marca: ${producto.maMarcarca}</div>
            <div class="producto-caracteristicas">Descripción: ${producto.Descripcion}</div>
            <div class="producto-caracteristicas">Stock Disponible: ${producto.StockDisponible}</div>
            <div class="producto-caracteristicas">Stock Mínimo: ${producto.StockMinimo}</div>
        </li>`;
}

function cargarProductosQR(listaProductos) {
    containerQR.innerHTML = ""; // Limpiar el contenedor antes de añadir nuevos productos

    listaProductos.forEach(producto => {
        let card = document.createElement('li');
        card.innerHTML = crearProductosQR(producto);
        containerQR.appendChild(card);
    });
}

// Abrir y cerrar el popup
function abrirPopup() {
    popup.style.display = 'block';
}
function cerrarPopup() {
    popup.style.display = 'none';
}

// Llamar a la función para cargar productos al cargar la página
cargarProductos();
