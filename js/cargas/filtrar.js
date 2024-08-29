const apiUrl = 'https://go-postgresql-restapi-tswy.onrender.com/productos';

let productosJson = [];

fetch('JSON/prueba.JSON')
    .then(response => response.json())
    .then(data => {
        productosJson = data;
        cargarProductos(productosJson); // Carga inicial de productos
    })
    .catch(error => console.error('Error al cargar productos:', error));

const checkboxesTipo = document.querySelectorAll('input[name="Tipo"]');

checkboxesTipo.forEach(element => {
    element.addEventListener("change", filtrar);
});


function filtrar() {
    console.log("Hola")    
    const productosFiltrados = productosJson.filter(producto => {
        return Array.from(checkboxesTipo).some(checkbox => checkbox.checked && checkbox.value === producto.Tipo);
    });

    cargarProductos(productosFiltrados);
}


