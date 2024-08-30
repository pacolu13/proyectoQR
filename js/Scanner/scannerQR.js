const video = document.getElementById('video');
const canvasElement = document.getElementById('canvas');
const canvas = canvasElement.getContext('2d');
const output = document.getElementById('output');
let info = "";
let yaPaso = false;

function iniciarEscaneo() {
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
            if (!yaPaso) {
                info = JSON.parse(code.data); // Parseo a JSON
                cargarProductosQR(info);
                añadirProducto();
                document.getElementById('container').style.display = 'none';
                yaPaso = true;
            }
        }
    }
    requestAnimationFrame(scanQRCode);
}