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
    let cantidadMinimaDecidida = 0;
    let precioDeseadoDecidida = 0;
    let cantAcomprarDecidida = 0;

    let cantidadMinimaInput = document.getElementById('cantidadMinima');
    let precioDeseadoInput = document.getElementById('precioDeseado');
    let cantAcomprarInput = document.getElementById('cantAcomprar');

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
    fetch(urlActualizarProducto, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            stockminimo: cantidadMinimaDecidida,
            preciodeseado: precioDeseadoDecidida,
            cantacomprar: cantAcomprarDecidida
        })
    })
        .then(response => {
            if (!response.ok) {
                generarError("exploto aca" ,response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Producto actualizado exitosamente:', data);
            let modalConfiguration = document.getElementById('modalConfiguration');
            modalConfiguration.style.display = 'none';
        })
        .catch(error => generarError(error));
}














