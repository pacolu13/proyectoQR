function validarCarrito(codigoCarrito, estado) {

    const urlValidarCarrito = `${urlCarritos}/${codigoCarrito}`;

    var estadoFinal = `"${estado}"`; // Solo comillas dobles alrededor del estado

    console.log(estadoFinal);

    fetch(urlValidarCarrito, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: estadoFinal
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo realizar la transacción: ${response.statusText}`);
            }
            cargarProductos();
        })
        .then(data => {
            if(estado === "confirmado"){
                generarConfirmaciones("Carrito confirmado.");

            }
            else{
                generarConfirmaciones("Carrito cancelado.");
            }
            cargarCarritosDeVentas();
        })
        .catch(error => {
            console.error('Hubo un problema con la operación de añadir el producto:', error);
        });
}


