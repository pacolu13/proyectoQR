const urlCarritos = 'https://go-postgresql-restapi-toek.onrender.com/carrito';
const carritosConfirmados = document.querySelector('.lista-ventas');
const carritosNoConfirmados = document.querySelector('.lista-ventas-nuevas');

let nombreProductos = [];

function cargarNombreDeProductos() {
    fetch(urlProductos)
        .then(response => response.json())
        .then(data => {
            nombreProductos = data;
        })
}


// Cargar todos los datos necesarios
async function cargarCarritosDeVentas() {
    try {
        const [carritosResponse] = await Promise.all([
            fetch(urlCarritos),

        ]);

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

    carritosConfirmados.innerHTML = "";
    carritosNoConfirmados.innerHTML = "";

    listaCarritos.forEach(carrito => {
        if (carrito.Estado === "Pendiente") {
            let card = document.createElement('li');
            card.innerHTML = crearCarritoNoConfirmado(carrito);
            carritosNoConfirmados.appendChild(card);
        }
        else {
            let card = document.createElement('li');
            card.innerHTML = crearCarritoConfirmado(carrito);
            carritosConfirmados.appendChild(card);
        }

    });
}

// Cargar las ventas unitarias
function cargarVentasUnitarias(listaVentasUnitarias) {
    const VentaUnitaria = document.querySelector('.modal-ventaUnitaria');
    listaVentasUnitarias.forEach(venta => {
        let card = document.createElement('div');
        let arrayConCinta = nombreProductos;
        card.innerHTML = crearVentaUnitaria(venta, arrayConCinta);
        VentaUnitaria.appendChild(card);
    });
}

// Crear la tarjeta para cada carrito
function crearCarritoConfirmado(carrito) {
    return `
    <div class="carrito">
        <div class="carrito-id">NRO VENTA: ${carrito.CodigoCarrito}</div>
        <div class="carrito-monto">MONTO TOTAL: $${carrito.MontoTotal}</div>
        <div class="carrito-monto">FECHA DE EMISION: ${carrito.FechaVenta}</div>
        <a href="#" onclick="abrirPestaña('${carrito.CodigoCarrito}')">Ver detalle</a>
    </div>`;
}

function crearCarritoNoConfirmado(carrito) {
    return `
    <div class="carrito">
        <div class="carrito-id">COD VENTA: ${carrito.CodigoCarrito} 
        <a href="#" onclick="abrirPestaña('${carrito.CodigoCarrito}')">Ver detalle</a>
        </div>
        <div class="carrito-monto">MONTO TOTAL: $${carrito.MontoTotal}</div>
        <div class="carrito-monto">FECHA DE EMISION: ${carrito.FechaVenta}</div>
        <div class="buttons-confirmarVenta">
            <button onclick="validarCarrito('${carrito.ID}','confirmado')">Confirmar</button>
            <button onclick="validarCarrito('${carrito.ID}','cancelado')">Cancelar</button>
        </div>
    </div>`;
}


// Crear la tarjeta para cada venta unitaria
function crearVentaUnitaria(ventaUnitaria, array) {

    let producto = array.find(producto => producto.CodigoUnico === ventaUnitaria.CodigoUnicoProducto);
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


function cargarTodosLosCarritos() {
    cargarNombreDeProductos();

    document.addEventListener('DOMContentLoaded', async (event) => {
        cargarCarritosDeVentas();
    });
}

cargarTodosLosCarritos();


