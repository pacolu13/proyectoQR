function cargarFiltrosMarcas() {
    const selectFiltro = document.getElementById("filtroMarca");

    // Limpia las opciones actuales
    selectFiltro.innerHTML = "";

    // Añade la opción "Ninguno" al principio
    const opcionNinguno = document.createElement('option');
    opcionNinguno.value = "";
    opcionNinguno.textContent = "Ninguno";
    selectFiltro.appendChild(opcionNinguno);

    marcas.forEach(element => {
        // Crea una opción y establece sus valores
        const option = document.createElement('option');
        option.value = element;
        option.textContent = element;

        // Añade la opción al <select>
        selectFiltro.appendChild(option);
    });
}
