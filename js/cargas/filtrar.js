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
    const checkboxesTipo = document.querySelectorAll('input[name="Tipo"]');
    const filtroNombre = document.getElementById('filtro-nombre');

    function aplicarFiltros() {
        const nombreFiltrado = filtroNombre.value.toLowerCase(); // Convertir a minúsculas para una búsqueda case-insensitive
        const marcaFiltrada = selectFiltro.value; // Obtener el valor seleccionado del SELECT
        const algunCheckboxMarcado = Array.from(checkboxesTipo).some(checkbox => checkbox.checked);

        let productosFiltrados = productosJson;

        // Filtrar por tipo si algún checkbox está marcado
        if (algunCheckboxMarcado) {
            productosFiltrados = productosFiltrados.filter(producto => {
                return Array.from(checkboxesTipo).some(checkbox => checkbox.checked && checkbox.value === producto.Tipo);
            });
        }

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

        // Cargar los productos filtrados
        cargarProductos(productosFiltrados);
    }

    // Añadir event listeners para los checkboxes
    checkboxesTipo.forEach(element => {
        element.addEventListener("change", aplicarFiltros);
    });

    // Añadir event listener para el input de nombre
    filtroNombre.addEventListener("input", aplicarFiltros);

    // Añadir event listener para el SELECT de marca
    selectFiltro.addEventListener("change", aplicarFiltros);
}



