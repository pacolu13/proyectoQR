let modalConfiguration = document.getElementById('modalConfiguration');
const btnActualizarStock = document.getElementById('btnActualizarStock');
const btnConfirmarStock = document.getElementById('confirmarStock');

const cantidadMinimaInput = document.getElementById('cantidadMinima');
const precioDeseado = document.getElementById('precioDeseado');
const cantAcomprar = document.getElementById('cantAcomprar');


let idProducto = ""; // Cambiado a let

function actualizarProducto(productoID) {

    let modalConfiguration = document.getElementById('modalConfiguration');
    modalConfiguration.style.display = 'block';

    //ESPERAR AL BOTON DE CONFIRMAR

    let urlActualizarProducto = `${urlConfiguracion}/${productoID}`;
    fetch(urlActualizarProducto, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            StockMinimo: cantidadMinimaInput.value,
            PrecioDeseado: precioDeseado.value,
            CantAcomprar: cantAcomprar.value
        })
    })
        .then(response => {
            if (!response.ok) {
                generarError(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Producto actualizado exitosamente:', data);
            modalConfiguration.style.display = 'none';
        })
        .catch(error => generarError(error));
}






