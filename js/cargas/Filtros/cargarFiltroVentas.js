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
