const urlCompras = 'https://go-postgresql-restapi-toek.onrender.com/compras';

async function cargarCompras() {
    try {
        const response = await fetch(urlCompras);
        const listaCompras = await response.json();
        
        mostrarCompras(listaCompras);
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
    }
}

function mostrarCompras(listaCompras) {
    const container = document.querySelector('.lista-compras');
    container.innerHTML = ''; // Limpiar el contenedor antes de cargar

    listaCompras.forEach(compra => {
        const card = document.createElement('li');
        card.innerHTML = crearCompra(compra);

        container.appendChild(card);
    });
}

function crearCompra(compra) {
    return `
    <div class="compra">
        <div>Codigo de producto: ${compra.CodigoProducto}</div>
        <div class="compra-caracteristicas">Fecha de emisión: ${compra.Fecha}</div>
        <div class="compra-caracteristicas">Stock comprado: ${compra.CantComprada}</div>
        <div class="compra-caracteristicas">Monto total: $${compra.Monto}</div>
        <div class="compra-estado">Estado: ${compra.Estado}</div>
    </div>`;
}

cargarCompras();


