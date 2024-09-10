function añadirItems(items, urlDeEnvio) {
    // DECLARAR URL DE PRODUCTOS
    fetch(urlDeEnvio, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(items) // Convertir el producto a una cadena JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`No se pudo realizar la transaccion:${response.statusText}`);
        }
        cargarProductos();
    })
    .then(data => {
        console.log('Producto añadido con éxito:', data);
    })
    .catch(error => {
        console.error('Hubo un problema con la operación de añadir el producto:', error);
    });
}
