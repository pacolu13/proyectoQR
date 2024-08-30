const video = document.getElementById('video');
const canvasElement = document.getElementById('canvas');
const canvas = canvasElement.getContext('2d');
const output = document.getElementById('output');
const Productos = "";
let yaPaso = false;


function iniciarEscaneo() {

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
            output.textContent = `Código QR detectado: ${code.data}`;

            Productos = JSON.parse(code.data); // Parseo a JSON
            cargarProductosQR(Productos);
            añadirProducto();

            document.getElementById('container').style.display = 'none';
            yaPaso = true;

            // Detener el video y el escaneo
            video.srcObject.getTracks().forEach(track => track.stop());
        } else {
            output.textContent = `Código QR no detectado`;
        }
    }
    requestAnimationFrame(scanQRCode);
}


function closeSesion() {
    document.getElementById('container').style.display = 'none';
}
