const urlFiltroCompras = 'https://go-postgresql-restapi-toek.onrender.com/comprasFiltro';

function filtrarCompras() {
    
    let filtroTipoInput = document.getElementById("filtroTipoCompra").value; //Manual, automatica
    let filtroEstadoInput = document.getElementById("filtroEstadoCompra").value; //Rechazado, confirmado

    let filtros = {
        tipo: filtroTipoInput,
        estado: filtroEstadoInput
    };

    let filtrosJSON = JSON.stringify(filtros);

    fetch(urlFiltroCompras, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: filtrosJSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        return response.json(); // Aquí obtenemos los datos en formato JSON
    })
    .then(data => { 
        mostrarCompras(data)    // Filtrar compras segun lo devuelto por el Back
    })
    .catch(error => {
        console.error('Error al cargar los productos:', error);
    });
}
