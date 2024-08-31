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

        container.appendChild(card);
    });
}

const editoriales = [];
const generos = [];

function crearProducto(libro) {

    if (!editoriales.includes(libro.editorial)) {
        editoriales.push(libro.editorial);
    }

    if (!generos.includes(libro.genero)) {
        generos.push(libro.genero);
    }

    cargarFiltrosEditorial();
    cargarFiltrosGenero();
    
    let template = ``;

    productosPrueba.forEach(producto => {
        if (producto.codigoUnico === libro.libroID) {
            template = `
            <li class="producto" id="${libro.libroID}">
                <div class="libro-Titulo">${libro.nombre}</div>
                <div class="libro-caracteristicas">Autor: ${libro.autor} - Genero: ${libro.genero}</div>
                <div class="libro-caracteristicas">Editorial: ${libro.editorial}</div>
                <div class="stock-Disponible">Stock Disponible: ${producto.stockDisponible}</div>
                <div class="stock-productoMinimo">Stock Minimo: ${producto.stockMinimo}</div>
                <div class="button-trash">
                <a href="#" onclick="eliminarProducto(${libro.libroID})"><i class="fa-solid fa-trash"></i></a>
                <a href="#" onclick="actualizarProducto(${libro.libroID})"><i class="fa-solid fa-gear"></i></a>
                </div>
            </li>`;
        }
    })
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

    let template = `
    <li class="producto-qr" id="${libro.libroID}">
        <div class="nombre-producto">${libro.nombre} - ${libro.autor} - ${libro.genero}</div>
        <div class="stock-Disponible">Stock Disponible: ${producto.StockDisponible}</div>
        <div class="stock-productoMinimo">Stock Minimo: ${producto.StockMinimo}</div>
        <div class="button-trash">
        <a href="#" onclick="eliminarProducto(${libro.libroID})"><i class="fa-solid fa-trash"></i></a>
        <a href="#" onclick="actualizarProducto(${libro.libroID})"><i class="fa-solid fa-gear"></i></a>
        </div>
    </li>`;
    return template;
}
