function aumentarPorcentaje(porcentajeNuevo) {
    // DECLARAR URL DE PRODUCTOS
    fetch(urlProductos, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: porcentajeNuevo
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`No se pudo realizar la transaccion:${response.statusText}`);
        }
        cargarProductos();
        return response.json(); // Procesar la respuesta JSON
    })
    .then(data => {
        console.log('Producto añadido con éxito:', data);
    })
    .catch(error => {
        console.error('Hubo un problema con la operación de añadir el producto:', error);
    });
}
