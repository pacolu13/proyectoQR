const urlFiltroCarrito = 'https://go-postgresql-restapi-toek.onrender.com/carritoFiltros';

function filtrarCarritos() {

    let filtroInput = document.getElementById("filtroFechaCarrito").value; //DIA? SEMANA? MES? COMO?

    let filtros = {
        fecha: filtroInput,
    };

    let filtrosJSON = JSON.stringify(filtros);

    fetch(urlFiltroCarrito, {
        method: 'PUT',
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
