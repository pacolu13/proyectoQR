const filtroNombre = document.getElementById('filtro-nombre');

const urlProductos = 'https://go-postgresql-restapi-tswy.onrender.com/productos';

let productosJson = []; //Lugar donde voy a añadir los productos que me traiga la API

fetch('json/productos.JSON')
    .then(response => response.json())
    .then(data => {
        productosJson = data;
        cargarProductos(productosJson); // Carga inicial de productos
    })
    .catch(error => console.error('Error al cargar productos:', error));


function añadirFiltros() {
    
}


