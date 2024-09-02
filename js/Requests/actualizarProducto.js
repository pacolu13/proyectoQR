const urlConfiguracion = 'https://go-postgresql-restapi-toek.onrender.com/configuracion';
let idProducto = ""; // Almacena la ID del producto
let productosPruebaConfiguracion = []; // Lugar donde voy a añadir los productos que me traiga la API

let cantMinimaActual = 0;
let precioDeseadoActual = 0;
let cantAcomprarActual = 0;

// REEMPLAZAR POR URL DE CONFIGURACION
fetch(urlProductos)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        productosPruebaConfiguracion = data;
    })
    .catch(error => console.error('Error al cargar productos:', error));

function mostrarModalConfiguracion(productoID) {
    productosPruebaConfiguracion.forEach(producto => {
        if (producto.productoID === productoID) {
            cantMinimaActual = producto.cantMinima;
            precioDeseadoActual = producto.precioDeseado;
            cantAcomprarActual = producto.cantAcomprar;
        }
    });

    let modalConfiguration = document.getElementById('modalConfiguration');
    modalConfiguration.style.display = 'block';
    idProducto = productoID;
}

function actualizarProducto() {
    let cantidadMinimaInput = document.getElementById('cantidadMinima').value;
    let precioDeseadoInput = document.getElementById('precioDeseado').value;
    let cantAcomprarInput = document.getElementById('cantAcomprar').value;

    let cantidadMinimaDecidida = cantidadMinimaInput !== "" ? cantidadMinimaInput : cantMinimaActual;
    let precioDeseadoDecidida = precioDeseadoInput !== "" ? precioDeseadoInput : precioDeseadoActual;
    let cantAcomprarDecidida = cantAcomprarInput !== "" ? cantAcomprarInput : cantAcomprarActual;

    let urlActualizarProducto = `${urlConfiguracion}/${idProducto}`;
    fetch(urlActualizarProducto, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            stock_minimo: cantidadMinimaDecidida,
            precio_deseado: precioDeseadoDecidida,
            cant_a_comprar: cantAcomprarDecidida
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            // Verificar si la respuesta tiene contenido antes de intentar parsearlo
            return response.text().then(text => text ? JSON.parse(text) : {});
        })
        .then(data => {
            console.log('Producto actualizado exitosamente:', data);
            let modalConfiguration = document.getElementById('modalConfiguration');
            modalConfiguration.style.display = 'none';
        })
        .catch(error => generarError(error));
}















