function añadirProducto(Productos) {
    // DECLARAR URL DE PRODUCTOS
    fetch(urlProductos, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Productos) // Convertir el producto a una cadena JSON
    })
    .then(response => {
        recargarProductos();
        if (!response.ok) {
            generarError(response.statusText);
        }
        return response.json(); // Procesar la respuesta JSON
    })
    .then(data => {
        console.log('Producto añadido con éxito:', data);
    })
    .catch(error => {
        console.error('Hubo un problema con la operación de añadir el producto:', error);
    });
}

function recargarProductos(){
    fetch(urlProductos)
    .then(response => response.json())
    .then(data => {
        let productosContainer = document.getElementById("listaProductos");
        productosContainer.innerHTML = "";
        cargarProductos(data)
    })
}


