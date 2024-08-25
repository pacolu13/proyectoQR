function actualizarStock() {

    // Configuración de la petición PUT
    fetch(apiUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(qrJson) // Enviar el JSON tal cual
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la actualización del stock: ' + response.statusText);
            }
            return response.json(); // Parsear la respuesta JSON si es necesario
        })
        .then(data => {
            console.log('Stock actualizado exitosamente:', data);
        })
        .catch(error => console.error('Error:', error));
};