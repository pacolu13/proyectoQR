const addProductButton = document.getElementById('addProductButton');

addProductButton.addEventListener('click', function () {
    
    iniciarEscaneo();

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productosQR) // Enviar el JSON tal cual
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la actualización del stock: ' + response.statusText);
            }
            return response.json(); // Parsear la respuesta JSON si es necesario
        })
        .then(data => {
            console.log('Producto añadido exitosamente:', data);
        })
        .catch(error => console.error('Error:', error));
});
