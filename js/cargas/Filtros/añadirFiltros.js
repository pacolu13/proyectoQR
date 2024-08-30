const filtroNombre = document.getElementById('filtro-nombre');

function añadirFiltros(productosJson) {

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
        if (marcaFiltrada && marcaFiltrada !== 'Marca') {
            productosFiltrados = productosFiltrados.filter(producto => {
                return producto.Marca === marcaFiltrada;
            });
        }

        // Filtrar por tipo si se ha seleccionado alguna opción diferente a 'Tipo'
        if (tipoFiltrada && tipoFiltrada !== 'Tipo') {
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