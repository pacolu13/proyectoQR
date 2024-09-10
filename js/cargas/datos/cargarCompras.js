const urlCompras = 'https://go-postgresql-restapi-toek.onrender.com/compras';
let nombreProductoCompras = [];

async function cargarCompras() {
    try {
        const [comprasResponse, productosNombreResponse] = await Promise.all([
            fetch(urlCompras),
            fetch(urlProductos)
        ]);

        const listaCompras = await comprasResponse.json();
        nombreProductoCompras = await productosNombreResponse.json();

        mostrarCompras(listaCompras);
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
    }
}

function mostrarCompras(listaCompras) {
    añadirFiltroEstadoCompras();
    añadirFiltroTipoCompras();
    const container = document.querySelector('.lista-compras');
    container.innerHTML = ''; // Limpiar el contenedor antes de cargar

    listaCompras.forEach(compra => {
        const card = document.createElement('li');
        card.innerHTML = crearCompra(compra);

        container.appendChild(card);
    });
}

function crearCompra(compra) {
    let producto = nombreProductoCompras.find(producto => producto.CodigoUnico === compra.CodigoProducto);
    let nombreProductoCompra = producto ? producto.Nombre : 'Producto no disponible';

    if (compra.Estado !== "Completado") {
        return `
        <div class="compra">
            <div>Nombre: ${nombreProductoCompra}</div>
            <div class="compra-caracteristicas">Codigo de producto: ${compra.CodigoProducto}</div>
            <div class="compra-caracteristicas">Fecha de emisión: ${compra.Fecha}</div>
            <div class="compra-estado">Estado: ${compra.Estado}</div>
            <div class="compra-estado">Tipo: ${compra.Tipo}</div>
        </div>`;
    } else {
        return `
    <div class="compra">
        <div>Nombre: ${nombreProductoCompra}</div>
        <div class="compra-caracteristicas">Codigo de producto: ${compra.CodigoProducto}</div>
        <div class="compra-caracteristicas">Fecha de emisión: ${compra.Fecha}</div>
        <div class="compra-caracteristicas">Stock comprado: ${compra.CantComprada}</div>
        <div class="compra-caracteristicas">Monto total: $${compra.Monto}</div>
        <div class="compra-estado">Estado: ${compra.Estado}</div>
        <div class="compra-estado">Tipo: ${compra.Tipo}</div>
    </div>`;
    }

}

document.addEventListener('DOMContentLoaded', (event) => {
    cargarCompras();
});



