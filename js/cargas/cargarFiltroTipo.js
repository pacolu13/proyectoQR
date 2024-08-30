let selectFiltroTipo = document.getElementById("filtroTipo");

function cargarFiltrosTipo() {

    // Limpia las opciones actuales
    selectFiltroTipo.innerHTML = "";

    // Añade la opción "Ninguno" al principio
    const opcionNinguno = document.createElement('option');
    opcionNinguno.value = "";
    opcionNinguno.textContent = "Tipo";
    selectFiltroTipo.appendChild(opcionNinguno);

    tipos.forEach(element => {
        // Crea una opción y establece sus valores
        const option = document.createElement('option');
        option.value = element;
        option.textContent = element;

        // Añade la opción al <select>
        selectFiltroTipo.appendChild(option);
    });
}
