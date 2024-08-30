const filtroNombre = document.getElementById('filtro-nombre');

const urlProductos = 'https://go-postgresql-restapi-tswy.onrender.com/productos';

let productosJson = []; //Lugar donde voy a añadir los productos que me traiga la API

fetch(urlProductos)
    .then(response => response.json())
    .then(data => {
        productosJson = data;
        cargarProductos(productosJson); // Carga inicial de productos
    })
    .catch(error => console.error('Error al cargar productos:', error));


function añadirFiltros() {
    function aplicarFiltros() {
        let nombreFiltrado = filtroNombre.value.toLowerCase();
        let marcaFiltrada = selectFiltroMarca.value; // Obtener el valor seleccionado del SELECT
        let tipoFiltrada = selectFiltroTipo.value;
        let productosFiltrados = productosJson;

        // Filtrar por nombre si el input no está vacío
        if (nombreFiltrado) {
            productosFiltrados = productosFiltrados.filter(producto => {
                return producto.Nombre.toLowerCase().includes(nombreFiltrado);
            });
        }

        // Filtrar por marca si se ha seleccionado alguna opción diferente a 'Marca'
        if (marcaFiltrada && marcaFiltrada !== 'Ninguno') { // Aquí "Ninguno" en lugar de "Marca"
            productosFiltrados = productosFiltrados.filter(producto => {
                return producto.Marca === marcaFiltrada;
            });
        }

        // Filtrar por tipo si se ha seleccionado alguna opción diferente a 'Tipo'
        if (tipoFiltrada && tipoFiltrada !== 'Ninguno') { // Aquí "Ninguno" en lugar de "Tipo"
            productosFiltrados = productosFiltrados.filter(producto => {
                return producto.Tipo === tipoFiltrada;
            });
        }

        cargarProductos(productosFiltrados);
    }

    // Añadir event listener para el input de nombre
    filtroNombre.addEventListener("input", aplicarFiltros);

    // Añadir event listener para el SELECT de marca
    selectFiltroTipo.addEventListener("change", aplicarFiltros);
    selectFiltroMarca.addEventListener("change", aplicarFiltros);
}
