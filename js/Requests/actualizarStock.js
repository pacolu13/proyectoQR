const btnActualizarStock = document.getElementById("btnActualizarStock");
const btnConfirmarStock = document.getElementById("confirmarStock");
const modalConfirmacion = document.getElementById('modalActualizarStock');
const btnCancelar = document.getElementById("btnCancelar");
const cantidadMinimaInput = document.getElementById('cantidadMinima');
const nombreProductoInput = document.getElementById("nombreProducto");

btnActualizarStock.addEventListener("click", function () {
    modalConfirmacion.style.display = 'block';
    cantidadMinimaInput.disabled = false; // Habilitar el input cuando se muestra el modal
    nombreProductoInput.disabled = false;
});

btnCancelar.addEventListener("click", function () {
    modalConfirmacion.style.display = "none";
    cantidadMinimaInput.disabled = true; // Deshabilitar el input cuando se oculta el modal
    nombreProductoInput.disabled = true;

});

btnConfirmarStock.addEventListener("click", function () {
    // Obtener valores de los inputs
    const nombreProducto = document.getElementById("nombreProducto").value;
    const cantMinimaNueva = cantidadMinimaInput.value;

    // Validar que los campos no estén vacíos
    if (nombreProducto.trim() === "" || cantMinimaNueva.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Buscar el producto por nombre
    fetch('URL_DE_TU_API/productos') //poner la URL para obtener la lista de productos
        .then(response => response.json())
        .then(data => {
            // Encontrar el producto que coincida con el nombre
            const producto = data.find(p => p.nombre === nombreProducto);
            if (!producto) {
                throw new Error('Producto no encontrado');
            }

            // Obtener el ID del producto
            const productoID = producto.id;

            // URL de la API para actualizar el stock
            const apiUrl = `URL_DE_TU_API/productos/${productoID}`;

            // Enviar la solicitud de actualización
            return fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ stockMinimo: cantMinimaNueva }) // Enviar solo la propiedad a definir
            });
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la actualización del stock: ' + response.statusText);
            }
            return response.json(); // Parsear la respuesta JSON si es necesario
        })
        .then(data => {
            console.log('Stock actualizado exitosamente:', data);
            modalConfirmacion.style.display = 'none'; // Ocultar modal después de la actualización
            cantidadMinimaInput.disabled = true; // Deshabilitar el input después de la actualización
        })
        .catch(error => console.error('Error:', error));
});
