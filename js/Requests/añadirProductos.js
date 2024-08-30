async function añadirProducto() {
    document.getElementById('container').style.display = 'block';

    try {
        // Esperar a que el escaneo se complete
        await iniciarEscaneo();

        // Luego de que el escaneo termine, hacer la solicitud fetch
        const response = await fetch(urlProductos, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Productos) // Convertir el producto a una cadena JSON
        });

        if (!response.ok) {
            throw new Error('Error al crear el producto: ' + response.statusText);
        }

        const data = await response.json();
        // Mostrar una notificación o hacer cualquier otra acción después de la creación exitosa
        console.log('Producto creado exitosamente:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}


