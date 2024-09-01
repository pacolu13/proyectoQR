function añadirProducto(Productos) {

    try {
        const response = fetch(urlProductos, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Productos) // Convertir el producto a una cadena JSON
        });

        if (!response.ok) {
            generarError(response.statusText);
        }

        const data = response.json();
        // Mostrar una notificación o hacer cualquier otra acción después de la creación exitosa
        console.log('Producto creado exitosamente:', data);
    } catch (error) {
        generarError(error);
    }
}