const urlFiltroCarrito = 'https://go-postgresql-restapi-toek.onrender.com/carritoFiltros';

function filtrarCarritos() {

    let filtroDiaInput = document.getElementById("filtroFechaDiaCarrito").value;
    let filtroMesInput = document.getElementById("filtroFechaMesCarrito").value;
    let filtroAñoInput = document.getElementById("filtroFechaAñoCarrito").value;

    let filtros = {
        dia: filtroDiaInput,
        mes: filtroMesInput,
        año: filtroAñoInput
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
