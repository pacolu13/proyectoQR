const video = document.getElementById('video');
const canvasElement = document.getElementById('canvas');
const canvas = canvasElement.getContext('2d');
const output = document.getElementById('output');
let items = "";
let parametro = "";

function iniciarEscaneo(tipoAccion) {
    parametro = tipoAccion;
    document.getElementById('container').style.display = 'block';

    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function (stream) {
        video.srcObject = stream;
        video.setAttribute("playsinline", true); // necesario para que funcione en iOS
        video.play();
        requestAnimationFrame(scanQRCode);
    });
}

function scanQRCode() {

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvasElement.height = video.videoHeight;
        canvasElement.width = video.videoWidth;
        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
        const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
            try {
                items = JSON.parse(code.data);
            } catch (error) {
                generarError(`Error al parsear JSON: ${error.message}`);
                return;
            }
            if (parametro === "productos") {
                try {
                    let urlParametro = 'https://go-postgresql-restapi-toek.onrender.com/productos';
                    añadirItems(items, urlParametro);
                } catch (error) {
                    generarError(`Error en productos: ${error.message}`);
                    return;
                }
                cargarProductosQR(items);
            } else {
                try {
                    let urlParametro = 'https://go-postgresql-restapi-toek.onrender.com/carrito';
                    añadirItems(items, urlParametro);
                } catch (error) {
                    generarError(`Error en carrito: ${error.message}`);
                }
            }

            cerrarPestaña('container');

            if (video.srcObject) {
                video.srcObject.getTracks().forEach(track => track.stop());
            }
        } else {
            output.textContent = "No se detectó ningún código QR.";
        }
    }
    requestAnimationFrame(scanQRCode);
}





