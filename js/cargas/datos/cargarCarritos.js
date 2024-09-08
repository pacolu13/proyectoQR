const urlCarritos = 'https://go-postgresql-restapi-toek.onrender.com/carrito';
const carritos = document.querySelector('.lista-ventas');

let nombreProductos = [];

// Cargar todos los datos necesarios
async function cargarCarritosDeVentas() {
    try {
        const [carritosResponse, productosResponse] = await Promise.all([
            fetch(urlCarritos),
            fetch(urlProductos)
        ]);

        nombreProductos = await productosResponse.json();
        const carritosData = await carritosResponse.json();

        // Procesar ventas y ventas unitarias
        cargarCarritos(carritosData);
        carritosData.forEach(carrito => cargarVentasUnitarias(carrito.VentasUnitarias));

    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

// Cargar las ventas
function cargarCarritos(listaCarritos) {
    carritos.innerHTML = "";
    listaCarritos.forEach(carrito => {
        let card = document.createElement('li');
        card.innerHTML = crearCarrito(carrito);
        carritos.appendChild(card);
    });
}

// Cargar las ventas unitarias
function cargarVentasUnitarias(listaVentasUnitarias) {
    const VentaUnitaria = document.querySelector('.modal-ventaUnitaria');
    listaVentasUnitarias.forEach(venta => {
        let card = document.createElement('div');
        card.innerHTML = crearVentaUnitaria(venta);
        VentaUnitaria.appendChild(card);
    });
}

// Crear la tarjeta para cada carrito
function crearCarrito(carrito) {
    return `
    <div class="carrito">
        <div class="carrito-id">NRO VENTA: ${carrito.CodigoCarrito}</div>
        <div class="carrito-monto">MONTO TOTAL: $${carrito.MontoTotal}</div>
        <div class="carrito-monto">FECHA DE EMISION: ${carrito.FechaVenta}</div>
        <a href="#" onclick="abrirPestaña('${carrito.CodigoCarrito}')">Ver detalle</a>
    </div>`;
}

// Crear la tarjeta para cada venta unitaria
function crearVentaUnitaria(ventaUnitaria) {

    let producto = nombreProductos.find(producto => producto.CodigoUnico === ventaUnitaria.CodigoUnicoProducto);
    let nombreProducto = producto ? producto.Nombre : 'Producto no disponible';

    return `
    <div class="modal-venta-unitaria" id="${ventaUnitaria.CodigoUnicoProducto}">
        <div class="modal-venta-unitaria-medio">
            <div class="venta-unitaria">
                <div class="producto-nombre">Nombre: ${nombreProducto}</div>
                <div class="producto-id">Codigo: ${ventaUnitaria.CodigoUnicoProducto}</div>
                <div class="producto-cantidad">Cantidad: ${ventaUnitaria.Cantidad}</div>
                <div class="producto-monto">Monto: $${ventaUnitaria.Monto}</div>
            </div>
        </div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    cargarCarritosDeVentas();
});
