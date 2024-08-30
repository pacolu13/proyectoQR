const productosPrueba = [
    {
        "ID": "e15",
        "Nombre": "Detergente",
        "Tipo": "Domestico",
        "Marca": "Ariel",
        "StockDisponible": 1600,
        "StockMinimo": 501
    },
    {
        "ID": "e15",
        "Nombre": "Montitor",
        "Tipo": "Electrodomestico",
        "Marca": "LG",
        "StockDisponible": 25,
        "StockMinimo": 5
    }
];

function añadirProducto() {

    productosPrueba.forEach(producto => {

        fetch('https://go-postgresql-restapi-tswy.onrender.com/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto) // Convertir el producto a una cadena JSON
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al crear el producto: ' + response.statusText);
            }
            return response; // Parsear la respuesta JSON si es necesario
        })
        .then(data => {
            console.log('Producto creado exitosamente:', data);
        })
        .catch(error => console.error('Error:', error));
    });
}
