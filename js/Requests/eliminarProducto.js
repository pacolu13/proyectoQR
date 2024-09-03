function eliminarProducto(productoID) {

    const modalConfirmacion = document.getElementById('modalConfirmacion');
    modalConfirmacion.style.display = 'block';
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');

    //DECLARAR URL DE PRODUCTOS
    btnSi.onclick = function () {
        modalConfirmacion.style.display = 'none';
        const urlEliminarProducto = `${urlProductos}/${productoID}`;

        fetch(urlEliminarProducto, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (!response.ok) {
                    generarError(response.statusText);
                }
                cargarProductos();
            })
            .catch(error => {
                generarError(error);
            });
    };

    btnNo.onclick = function () {
        modalConfirmacion.style.display = 'none';
    };
}

// Cerrar modales si el usuario hace clic fuera de ellos
window.onclick = function (event) {
    const modalConfirmacion = document.getElementById('modalConfirmacion');
    const modalNotificacion = document.getElementById('modalNotificacion');

    if (event.target === modalConfirmacion) {
        modalConfirmacion.style.display = 'none';
    } else if (event.target === modalNotificacion) {
        modalNotificacion.style.display = 'none';
    }
};
