const apiUrl = 'https://go-postgresql-restapi-tswy.onrender.com/productos';

let productosJson = []; //Lugar donde voy a añadir los productos que me traiga la API

fetch(apiUrl)   // Reemplazar por URL de la API
    .then(response => response.json())
    .then(data => {
        productosJson = data;
        cargarProductos(productosJson); // Carga inicial de productos
    })
    .catch(error => console.error('Error al cargar productos:', error));


function añadirFiltros() {  //Funcion que se llama dentro de cargarFiltros.js a medida que se CREAN los filtros

    const checkboxesTipo = document.querySelectorAll('input[name="Tipo"]');

    checkboxesTipo.forEach(element => {
        element.addEventListener("change", function () {
            const algunCheckboxMarcado = Array.from(checkboxesTipo).some(checkbox => checkbox.checked);

            // Si no hay ningún checkbox marcado, mostrar todos los productos
            if (!algunCheckboxMarcado) {
                cargarProductos(productosJson);
                return;
            }

            // Si hay checkboxes marcados, filtrar los productos
            const productosFiltrados = productosJson.filter(producto => {
                return Array.from(checkboxesTipo).some(checkbox => checkbox.checked && checkbox.value === producto.Tipo);
            });

            cargarProductos(productosFiltrados);
        });
    });

}


