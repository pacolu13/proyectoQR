

function añadirFiltros() {

    let filtroMarca = document.getElementById("filtroMarca").value;
    let filtroTipo = document.getElementById("filtroMarca").value;
    let nombreInput = document.getElementById("filtro-nombre").value;

    fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombreInput,
            tipo: filtroTipo,
            marca: filtroMarca
        })
    })
    .catch(error => console.error('Error al cargar productos:', error));

}
