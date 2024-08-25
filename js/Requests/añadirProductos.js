function añadirProducto() {

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData) // Convertir los datos en una cadena JSON
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al crear el producto: ' + response.statusText);
            }
            return response.json(); // Parsear la respuesta JSON si es necesario
        })
        .then(data => {
            console.log('Producto creado exitosamente:', data);
            // Aquí puedes realizar acciones adicionales después de la creación
        })
        .catch(error => console.error('Error:', error));
};