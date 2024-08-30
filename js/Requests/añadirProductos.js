function añadirProducto() {

    iniciarEscaneo();

    const response = fetch(urlProductos, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Productos) // Convertir el producto a una cadena JSON
    });

    if (!response.ok) {
        throw new Error('Error al crear el producto: ' + response.statusText);
    }

    const data = response.json();
    // Mostrar una notificación o hacer cualquier otra acción después de la creación exitosa
    console.log('Producto creado exitosamente:', data);
}


