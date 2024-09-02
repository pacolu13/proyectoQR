const filtroNombre = document.getElementById('filtro-nombre');

let productosJson = []; //Lugar donde voy a añadir los productos que me traiga la API

fetch(urlProductos)
    .then(response => response.json())
    .then(data => {
        productosJson = data;
        cargarProductos(productosJson); // Carga inicial de productos
    })
    .catch(error => console.error('Error al cargar productos:', error));


function añadirFiltros() {
    
}


