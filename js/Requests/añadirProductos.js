function añadirProducto(Productos) {

    //DECLARAR URL DE PRODUCTOS
    fetch(urlProductos, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Productos) // Convertir el producto a una cadena JSON
    });
}