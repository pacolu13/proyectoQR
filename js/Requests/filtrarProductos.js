const urlFiltros = 'https://go-postgresql-restapi-toek.onrender.com/productosFiltro';

function añadirFiltros() {
    let filtroMarca = document.getElementById("filtroMarca").value;
    let filtroTipo = document.getElementById("filtroTipo").value;
    let nombreInput = document.getElementById("filtro-nombre").value;

    let filtros = {
        nombre: nombreInput,
        tipo: filtroTipo,
        marca: filtroMarca
    };

    let filtrosJSON = JSON.stringify(filtros);

    fetch(urlFiltros, {
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
        let productosContainer = document.getElementById("listaProductos");
        productosContainer.innerHTML = ""; 
        generarProductos(data); 
    })
    .catch(error => {
        console.error('Error al cargar los productos:', error);
    });
}

