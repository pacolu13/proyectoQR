const urlFiltroCarrito = 'https://go-postgresql-restapi-toek.onrender.com/carritosFiltro';

function filtrarCarritos() {

    let filtroFechaInput = document.getElementById("fechaVenta").value;

    if (tipoDiario) {
        var tipoFecha = "diario";
    }

    if(tipoMensual){
        tipoFecha = "mensual";
    }

    let filtros = {
        fecha: filtroFechaInput,
        tipo: tipoFecha
    };

    let filtrosJSON = JSON.stringify(filtros);
    fetch(urlFiltroCarrito, {
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
            cargarCarritos(data)    // Filtrar carritos segun lo devuelto por el Back
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
}

