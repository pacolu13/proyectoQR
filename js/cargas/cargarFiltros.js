fetch('JSON/prueba.JSON')
    .then(response => response.json()) // Parsear el JSON
    .then(data => cargarFiltros(data)) // Pasar los datos al método de muestra
    .catch(error => console.error('Error al leer el archivo JSON:', error));

function cargarFiltros(listaProductos) {
    const container = document.querySelector('.filtros-prueba'); //Es un fieldset
    listaProductos.forEach(element => {
        let card = document.createElement('label');
        card.innerHTML = crearFiltro(element);

        container.appendChild(card);
    });
}

let array = [];

function crearFiltro(producto) {
    let template = '';

    if (!array.includes(producto.Tipo)) {
        array.push(producto.Tipo); // Usar push para agregar al array
        template = `
        <input  class="Prueba" type="checkbox" name="Tipo" value="${producto.Tipo}">${producto.Tipo}
        `;
    }
    return template;
}