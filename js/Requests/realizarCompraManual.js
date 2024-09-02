let idProductoManual = "";

const btnSiCompraManual = document.getElementById('btnSi-compraManual');
const btnNoCompraManual = document.getElementById('btnNo-compraManual');

function mostrarCompraManual(productoID) {
    let modalCompraManual = document.getElementById('modalCompraManual');
    modalCompraManual.style.display = 'block';
    idProductoManual = productoID;
}

function realizarCompra() {

    let cantInput = parseInt(document.getElementById('cantCompraManual').value);
    
    console.log(cantInput);
    console.log(idProductoManual);

    fetch(urlCompras, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            codigoproducto: idProductoManual,
            cantcomprada: cantInput,
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Compra realizada exitosamente:', data);
            // Ventana emergente o alguna notificación
        })
        .catch(error => {
            generarError(error);
        });

        modalCompraManual.style.display = 'none';

}

function cerrarVentaManual() {
    let modalCompraManual = document.getElementById('modalCompraManual');
    modalCompraManual.style.display = 'none';
}


