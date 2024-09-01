function añadirProducto(Productos) {

    try {
        //DECLARAR URL DE PRODUCTOS
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

        //PESTAÑA EMERGENTE DE QUE SE AÑADIERON CORRECTAMENTE
        
    } catch (error) {
        generarError(error);
    }
}