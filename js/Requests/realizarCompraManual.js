const cantInput = document.getElementById("cantAcomprar");
const modalCompraManual = document.getElementById('modalCompraManual');

modalConfirmacion.style.display = 'block';

const btnSiCompraManual = document.getElementById('btnSi-compraManual');
const btnNoCompraManual = document.getElementById('btnNo-compraManual');


function realizarCompra(codigoProducto) {

    btnSi.onclick = function () {
        modalCompraManual.style.display = 'none';

        fetch(urlCompras, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                codigo_producto: codigoProducto,
                cant_comprada: cantInput,
            })
        })
            .then(response => {
                if (!response.ok) {
                    generarError(response.statusText);
                }
            })
            .then(data => {
                //Ventana emergente de que se elimino el producto
            })
            .catch(error => {
                generarError(error);
            });
    };

    btnNo.onclick = function () {
        modalConfirmacion.style.display = 'none';
    };
}


