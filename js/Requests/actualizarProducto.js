// Define la variable en un ámbito global o dentro de una función que se ejecute antes del eventListener
const modalConfiguration = document.getElementById('modalConfiguration');
const btnCancelarActualizacion = document.getElementById("btnCancelar-actualizacion");

// Asegúrate de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    btnCancelarActualizacion.addEventListener("click", function () {
        modalConfiguration.style.display = 'none';
    });
});

function actualizarProducto(productoID) {
    modalConfiguration.style.display = 'block';
}
