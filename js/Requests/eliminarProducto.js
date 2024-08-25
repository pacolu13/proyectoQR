function eliminarProducto(productoID) {
    // Mostrar el modal de confirmación
    const modalConfirmacion = document.getElementById('modalConfirmacion');
    modalConfirmacion.style.display = 'block';

    // Obtener botones del modal
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');

    // Acciones para el botón "Sí"
    btnSi.onclick = function () {
        modalConfirmacion.style.display = 'none';
        const urlEliminarProducto = `${apiUrl}/${productoID}`;
        
        fetch(urlEliminarProducto, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la eliminación del producto: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                // Mostrar el modal de notificación con mensaje de éxito
                mostrarNotificacion("Producto eliminado exitosamente.");
            })
            .catch(error => {
                // Mostrar el modal de notificación con mensaje de error
                mostrarNotificacion('Error al eliminar el producto: ' + error.message);
            });
    };

    // Acción para el botón "No"
    btnNo.onclick = function () {
        modalConfirmacion.style.display = 'none';
    };
}

function mostrarNotificacion(mensaje) {
    const modalNotificacion = document.getElementById('modalNotificacion');
    const mensajeNotificacion = document.getElementById('mensajeNotificacion');
    
    mensajeNotificacion.textContent = mensaje;
    modalNotificacion.style.display = 'block';

    // Cerrar el modal de notificación
    const btnCerrar = document.getElementById('btnCerrar');
    btnCerrar.onclick = function () {
        modalNotificacion.style.display = 'none';
    };
}

// Cerrar modales si el usuario hace clic fuera de ellos
window.onclick = function(event) {
    const modalConfirmacion = document.getElementById('modalConfirmacion');
    const modalNotificacion = document.getElementById('modalNotificacion');
    
    if (event.target === modalConfirmacion) {
        modalConfirmacion.style.display = 'none';
    } else if (event.target === modalNotificacion) {
        modalNotificacion.style.display = 'none';
    }
};
