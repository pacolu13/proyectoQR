const filtroVentas = document.getElementById("filtroVentas");
const fechaInput = document.getElementById('fechaVenta');
let tipoDiario = false;
let tipoMensual = false;

function filtrarVentas() {

    // Limpia las opciones actuales
    filtroVentas.innerHTML = "";

    // Añade la opción "Filtrar por..." al principio
    let opcionNinguno = document.createElement('option');
    opcionNinguno.value = "";
    opcionNinguno.textContent = "Filtrar por...";
    filtroVentas.appendChild(opcionNinguno);

    // Opción de ventas diarias
    let opcionDia = document.createElement('option');
    opcionDia.value = "diarias";
    opcionDia.textContent = "Ventas del día";
    filtroVentas.appendChild(opcionDia);

    // Opción de ventas mensuales
    let opcionMes = document.createElement('option');
    opcionMes.value = "mensuales";
    opcionMes.textContent = "Ventas mensuales";
    filtroVentas.appendChild(opcionMes);

    // Desactiva el input de fecha al inicio
    fechaInput.disabled = true;
}

// Función para adaptar el campo de fecha según la selección
filtroVentas.addEventListener('change', function () {
    const seleccion = filtroVentas.value;

    if (seleccion === "") {
        fechaInput.disabled = true;  // Desactiva si no se elige ninguna opción válida
        fechaInput.value = "";       // Limpia el campo de fecha
        tipoDiario = false;
        tipoMensual = false;
    } else if (seleccion === "diarias") {
        fechaInput.disabled = false;  // Habilita el campo de fecha
        fechaInput.value = "";        // Limpia el campo anterior
        fechaInput.placeholder = "DD-MM-YYYY";  // Muestra el formato esperado
        tipoDiario = true; //las diarias fueron seleccionadas
        tipoMensual = false;
        fechaInput.addEventListener('input', formatoDiario);
        fechaInput.removeEventListener('input', formatoMensual);
    } else if (seleccion === "mensuales") {
        fechaInput.disabled = false;  // Habilita el campo de fecha
        fechaInput.value = "";        // Limpia el campo anterior
        fechaInput.placeholder = "MM-YYYY";  // Muestra el formato esperado
        tipoDiario = false; //las diarias fueron seleccionadas
        tipoMensual = true;
        fechaInput.addEventListener('input', formatoMensual);
        fechaInput.removeEventListener('input', formatoDiario);
    }
});

// Función para aplicar el formato DD-MM-YYYY
function formatoDiario(e) {
    let valor = fechaInput.value.replace(/[^0-9]/g, '');

    if (valor.length > 2 && valor.length <= 4) {
        valor = valor.slice(0, 2) + '-' + valor.slice(2);
    } else if (valor.length > 4) {
        valor = valor.slice(0, 2) + '-' + valor.slice(2, 4) + '-' + valor.slice(4, 8);
    }

    fechaInput.value = valor;
}

// Función para aplicar el formato MM-YYYY
function formatoMensual(e) {
    let valor = fechaInput.value.replace(/[^0-9]/g, '');

    if (valor.length > 2) {
        valor = valor.slice(0, 2) + '-' + valor.slice(2);
    }

    fechaInput.value = valor;
}

// Inicializa el filtro
filtrarVentas();

