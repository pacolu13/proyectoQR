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

            let signoExclamacion = "";

            if (producto.stockMinimo === 0) {
                signoExclamacion = `<i class="fa-solid fa-exclamation"></i>`;
            };

            template = `
            <li class="producto" id="${libro.libroID}">
                <div class="producto-titulo">${libro.nombre}</div>
                <div class="producto-caracteristicas">Autor: ${libro.autor} - Genero: ${libro.genero}</div>
                <div class="producto-caracteristicas">Editorial: ${libro.editorial}</div>
                <div class="producto-caracteristicas">Stock Disponible: ${producto.stockDisponible}</div>
                <div class="producto-caracteristicas">Stock Minimo: ${producto.stockMinimo} 
                    <a href="#" class="exclamation-button" onclick="abrirPopup()">${signoExclamacion}</a>
                </div>
                <div class="producto-buttons">
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

    let template = ``;

    productosPrueba.forEach(producto => {
        if (producto.codigoUnico === libro.libroID) {

            let signoExclamacion = "";

            if (producto.stockMinimo === 0) {
                signoExclamacion = `<i class="fa-solid fa-exclamation"></i>`;
            };

            template = `
            <li class="producto" id="${libro.libroID}">
                <div class="producto-titulo">${libro.nombre}</div>
                <div class="producto-caracteristicas">Autor: ${libro.autor} - Genero: ${libro.genero}</div>
                <div class="producto-caracteristicas">Editorial: ${libro.editorial}</div>
                <div class="producto-caracteristicas">Stock Disponible: ${producto.stockDisponible}</div>
                <div class="producto-caracteristicas">Stock Minimo: ${producto.stockMinimo}</div>
            </li>`;
        }
    })
    return template;
}

function abrirPopup() {
    popup.style.display = 'block';
}