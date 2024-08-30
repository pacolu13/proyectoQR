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
    const filtroNombre = document.getElementById('filtro-nombre');
    const selectFiltroTipo = document.getElementById("filtroTipo");
    const selectFiltroMarca = document.getElementById("filtroMarca");

    
    function aplicarFiltros() {
        const nombreFiltrado = filtroNombre.value.toLowerCase(); // Convertir a minúsculas para una búsqueda case-insensitive
        const marcaFiltrada = selectFiltroMarca.value; // Obtener el valor seleccionado del SELECT
        const tipoFiltrada = selectFiltroTipo.value; // Obtener el valor seleccionado del SELECT

        console.log('Nombre:', nombreFiltrado);
        console.log('Marca:', marcaFiltrada);
        console.log('Tipo:', tipoFiltrada);

        let productosFiltrados = productosJson;

        // Filtrar por nombre si el input no está vacío
        if (nombreFiltrado) {
            productosFiltrados = productosFiltrados.filter(producto => {
                return producto.Nombre.toLowerCase().includes(nombreFiltrado);
            });
        }

        // Filtrar por marca si se ha seleccionado alguna opción diferente a 'Ninguno'
        if (marcaFiltrada && marcaFiltrada !== 'Ninguno') {
            productosFiltrados = productosFiltrados.filter(producto => {
                return producto.Marca === marcaFiltrada;
            });
        }

        // Filtrar por tipo si se ha seleccionado alguna opción diferente a 'Ninguno'
        if (tipoFiltrada && tipoFiltrada !== 'Ninguno') {
            productosFiltrados = productosFiltrados.filter(producto => {
                return producto.Tipo === tipoFiltrada;
            });
        }

        console.log('Productos filtrados:', productosFiltrados);

        cargarProductos(productosFiltrados);
    }

    // Añadir event listener para el input de nombre
    filtroNombre.addEventListener("input", aplicarFiltros);

    // Añadir event listener para el SELECT de marca
    selectFiltroTipo.addEventListener("change", aplicarFiltros);

    selectFiltroMarca.addEventListener("change", aplicarFiltros);
}



