const filtroVentas = document.getElementById("filtroVentas");

function filtrarVentas() {

    // Limpia las opciones actuales
    filtroTipo.innerHTML = "";

    // Añade la opción "Ninguno" al principio
    const opcionNinguno = document.createElement('option');
    opcionNinguno.value = "";
    opcionNinguno.textContent = "Tipo";
    filtroVentas.appendChild(opcionNinguno);

    Tipos.forEach(element => {
        // Crea una opción y establece sus valores
        const option = document.createElement('option');
        option.value = element;
        option.textContent = element;

        // Añade la opción al <select>
        filtroVentas.appendChild(option);
    });
}

//Acreditar fecha con el modelo estandar solicitado

const fechaInput = document.getElementById('fechaVenta');

fechaInput.addEventListener('input', function (e) {
    let valor = fechaInput.value;
    valor = valor.replace(/[^0-9\-]/g, '');

    if (e.inputType === 'deleteContentBackward') {
        return;
    }
    if (valor.length === 2 || valor.length === 5) {
        fechaInput.value = valor + '-';
    } else {
        fechaInput.value = valor; 
    }
});