const video = document.getElementById('video');
const canvasElement = document.getElementById('canvas');
const canvas = canvasElement.getContext('2d');
const output = document.getElementById('output');
let Productos = ""; // Corregido a "let" para poder reasignar valor

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
            //AÑADIR ALGO EMERGENTE DE QUE SE AÑADIO EL PRODUCTO
            Productos = JSON.parse(code.data); // Parsear el JSON a un objeto
            cargarProductosQR(Productos);
            añadirProducto();
            closeSesion();
        } else {
            output.textContent = "No se detectó ningún código QR.";
        }
    }
    requestAnimationFrame(scanQRCode);
}

function closeSesion() {
    document.getElementById('container').style.display = 'none';
    // Detener el video si aún está activo
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }
}

function añadirProducto() {

    document.getElementById('container').style.display = 'none';

    try {
        const response = fetch(urlProductos, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Productos) // Convertir el producto a una cadena JSON
        });

        if (!response.ok) {
            throw new Error('Error al crear el producto: ' + response.statusText);
        }

        const data = response.json();
        // Mostrar una notificación o hacer cualquier otra acción después de la creación exitosa
        console.log('Producto creado exitosamente:', data);
    } catch (error) {
        console.error('Error en añadirProducto:', error);
        throw error;
    }
}
