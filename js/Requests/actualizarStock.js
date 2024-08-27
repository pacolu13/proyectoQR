const btnActualizarStock = document.getElementById("btnActualizarStock");
const btnConfirmarStock = document.getElementById("confirmarStock");
const modalConfirmacion = document.getElementById('modalActualizarStock');
const btnCancelar = document.getElementById("btnCancelar");

btnActualizarStock.addEventListener("click", function () {
    modalConfirmacion.style.display = 'block';
});

btnCancelar.addEventListener("click", function (){
    modalConfirmacion.style.display = "none";
});

btnConfirmarStock.addEventListener("click", function () {
    // Obtener valores de los inputs
    const nombreProducto = document.getElementById("nombreProducto").value;
    const cantMinimaNueva = document.getElementById('cantidadMinima').value;

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
        })
        .catch(error => console.error('Error:', error));
});

