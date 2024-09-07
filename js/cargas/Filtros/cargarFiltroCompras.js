const filtroTipoCompra = document.getElementById("filtroTipoCompra");
const filtroEstadoCompra = document.getElementById("filtroEstadoCompra");

function añadirFiltroTipoCompras() {

    // Añade la opción "Ninguno" al principio
    var opcionNinguno = document.createElement('option');
    opcionNinguno.value = "";
    opcionNinguno.textContent = "Tipo";
    filtroTipoCompra.appendChild(opcionNinguno);

    var tipoManual = document.createElement('option');
    tipoManual.value = "Manual";
    tipoManual.textContent = "Manual";

    filtroTipoCompra.appendChild(tipoManual);

    var tipoAutomatico = document.createElement('option');
    tipoAutomatico.value = "Automatico";
    tipoAutomatico.textContent = "Automatico";

    filtroTipoCompra.appendChild(tipoAutomatico);
}


function añadirFiltroEstadoCompras() {

    // Añade la opción "Ninguno" al principio
    var opcionNinguno = document.createElement('option');
    opcionNinguno.value = "";
    opcionNinguno.textContent = "Estado";
    filtroEstadoCompra.appendChild(opcionNinguno);

    var estadoConfirmado = document.createElement('option');
    estadoConfirmado.value = "Confirmado";
    estadoConfirmado.textContent = "Confirmado";

    filtroEstadoCompra.appendChild(estadoConfirmado);

    var estadoRechazado = document.createElement('option');
    estadoRechazado.value = "Rechazado";
    estadoRechazado.textContent = "Rechazado";

    filtroEstadoCompra.appendChild(estadoRechazado); 
}

añadirFiltroEstadoCompras()
añadirFiltroTipoCompras()
