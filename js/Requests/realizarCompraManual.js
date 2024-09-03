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
                throw new Error(`No se pudo realizar la compra de forma manual`);
            }
        })
        .then(data => {
            generarConfirmaciones('Compra realizada exitosamente');
            cargarProductos();
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


