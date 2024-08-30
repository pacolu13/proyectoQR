const modalConfiguration = document.getElementById('modalConfiguration');
const modalConfirmacion = document.getElementById('modalActualizarStock');

const btnActualizarStock = document.getElementById("btnActualizarStock");
const btnConfirmarStock = document.getElementById("confirmarStock");

const btnCancelar = document.getElementById("btnCancelar");
const btnCancelarActualizacion = document.getElementById("btnCancelar-actualizacion");

const cantidadMinimaInput = document.getElementById('cantidadMinima');

let idProducto = ""; // Cambiado a let

function actualizarProducto(productoID) {
    modalConfiguration.style.display = 'block';

    fetch(urlProductos)
        .then(response => response.json())
        .then(productos => {
            productos.forEach(producto => {
                if (producto.ID === productoID) {
                    idProducto = productoID;
                    cantidadMinimaInput.value = producto.StockMinimo; // Inicializa el valor en el stock minimo anterior
                }
            });
        });
}

btnConfirmarStock.addEventListener("click", function () {
    // Asegúrate de que urlActualizarProducto sea correcta
    let urlActualizarProducto = `${urlProductos}/${idProducto}`;
    fetch(urlActualizarProducto, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            StockMinimo: cantidadMinimaInput.value // Corregido: usar JSON.stringify para el cuerpo
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al actualizar el producto: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Producto actualizado exitosamente:', data);
            modalConfiguration.style.display = 'none'; // Cerrar modal al guardar cambios
        })
        .catch(error => console.error('Error:', error));
});

btnCancelarActualizacion.addEventListener("click", function () {
    modalConfiguration.style.display = 'none';
});

btnActualizarStock.addEventListener("click", function () {
    modalConfirmacion.style.display = 'block';
    cantidadMinimaInput.disabled = false; // Habilitar el input cuando se muestra el modal
});

btnCancelar.addEventListener("click", function () {
    modalConfirmacion.style.display = "none";
    cantidadMinimaInput.disabled = true; // Deshabilitar el input cuando se oculta el modal
});





