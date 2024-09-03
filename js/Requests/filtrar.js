const urlFiltros = 'https://go-postgresql-restapi-toek.onrender.com/productosFiltro';

function añadirFiltros() {
    let filtroMarca = document.getElementById("filtroMarca").value;
    let filtroTipo = document.getElementById("filtroTipo").value; // Cambié a "filtroTipo"
    let nombreInput = document.getElementById("filtro-nombre").value;

    // Construimos la URL con los parámetros de filtro
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
    .then(data => {
        let productosContainer = document.getElementById("listaProductos");
        productosContainer.innerHTML = "";
        cargarProductos(data);
    })
    .catch(error => {
        console.error('Error al cargar los productos:', error);
    });
}
