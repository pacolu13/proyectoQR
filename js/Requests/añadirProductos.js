const addProductButton = document.getElementById('addProductButton');

addProductButton.addEventListener('click', function () {
    
    iniciarEscaneo();

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify('JSON/prueba.JSON') // Enviar el JSON
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la actualización del stock: ' + response.statusText); //Añadir ventana emergente en caso de problemas
            }
            return response.json(); // Parsear la respuesta JSON si es necesario
        })
        .then(data => {
            console.log('Producto añadido exitosamente:', data);
        })
        .catch(error => console.error('Error:', error));
});
