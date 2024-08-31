const selectFiltroGenero = document.getElementById("filtroGenero");

function cargarFiltrosGenero() {

    // Limpia las opciones actuales
    selectFiltroGenero.innerHTML = "";

    // Añade la opción "Ninguno" al principio
    const opcionNinguno = document.createElement('option');
    opcionNinguno.value = "";
    opcionNinguno.textContent = "Género";
    selectFiltroGenero.appendChild(opcionNinguno);

    generos.forEach(element => {
        // Crea una opción y establece sus valores
        const option = document.createElement('option');
        option.value = element;
        option.textContent = element;

        // Añade la opción al <select>
        selectFiltroGenero.appendChild(option);
    });
}
