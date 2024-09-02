const urlConfiguracion = 'https://go-postgresql-restapi-toek.onrender.com/configuracion';
let idProducto = ""; // Almacena la ID del producto
let productosPruebaConfiguracion = []; //Lugar donde voy a añadir los productos que me traiga la API

let cantMinimaActual = 0;
let precioDeseadoActual = 0;
let cantAcomprarActual = 0;

//REEMPLAZAR POR URL DE CONFIGURACION

fetch(urlProductos)
    .then(response => response.json())
    .then(data => {
        productosPruebaConfiguracion = data;
    })
    .catch(error => console.error('Error al cargar productos:', error));



function mostrarModalConfiguracion(productoID) {
    productosPruebaConfiguracion.forEach(producto => function () {
        if (producto.ID === productoID) {

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
    let cantidadMinimaDecidida = 0;
    let precioDeseadoDecidida = 0;
    let cantAcomprarDecidida = 0;

    let cantidadMinimaInput = parseInt(document.getElementById('cantidadMinima').value);
    let precioDeseadoInput = parseFloat(document.getElementById('precioDeseado').value);
    let cantAcomprarInput = parseInt(document.getElementById('cantAcomprar').value);

    if (cantidadMinimaInput === null) {
        cantidadMinimaDecidida = cantMinimaActual;
    } else {
        cantidadMinimaDecidida = cantidadMinimaInput;
    }

    if (precioDeseadoInput === null) {
        precioDeseadoDecidida = precioDeseadoActual;
    } else {
        precioDeseadoDecidida = precioDeseadoInput;
    }

    if (cantAcomprarInput === null) {
        cantAcomprarDecidida = cantAcomprarInput;
    } else {
        cantAcomprarDecidida = cantAcomprarInput;
    }

    let urlActualizarProducto = `${urlConfiguracion}/${idProducto}`;

    console.log(cantidadMinimaDecidida);
    console.log(precioDeseadoDecidida);
    console.log(cantAcomprarDecidida);

    fetch(urlActualizarProducto, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            stockminimo: cantidadMinimaDecidida,
            preciodeseado: precioDeseadoDecidida,
            cantacomprar: cantAcomprarDecidida
        })
    })
        .then(data => {
            console.log('Producto actualizado exitosamente:', data);
            let modalConfiguration = document.getElementById('modalConfiguration');
            modalConfiguration.style.display = 'none';
        })
        .catch(error => generarError(error));
}














