const productoPrueba = [
    {
        "CodigoUnico": "e19",
        "Nombre": "Gaseosa",
        "Tipo": "Bebida",
        "Marca": "Pepsi",
        "StockDisponible": 176,
        "StockMinimo": 152
    },
    {
        "CodigoUnico": "e20",
        "Nombre": "Gaseosa",
        "Tipo": "Bebida",
        "Marca": "Fanta",
        "StockDisponible": 196,
        "StockMinimo": 195
    },
];

function añadirProducto() {
    fetch(urlProductos, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productoPrueba) // Convertir el producto a una cadena JSON
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al crear el producto: ' + response.statusText);
            }
        })
        .then(data => {
            //¿Mostrar pestañita emergente y recargar pagina?
            console.log('Producto creado exitosamente:', data);
        })
        .catch(error => console.error('Error:', error));
}
