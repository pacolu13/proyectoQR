const filtroTipo = document.getElementById("filtroTipo");

function filtrarTipo() {

    // Limpia las opciones actuales
    filtroTipo.innerHTML = "";

    // Añade la opción "Ninguno" al principio
    const opcionNinguno = document.createElement('option');
    opcionNinguno.value = "";
    opcionNinguno.textContent = "Tipo";
    filtroTipo.appendChild(opcionNinguno);

    tipos.forEach(element => {
        // Crea una opción y establece sus valores
        const option = document.createElement('option');
        option.value = element;
        option.textContent = element;

        // Añade la opción al <select>
        filtroTipo.appendChild(option);
    });
}
