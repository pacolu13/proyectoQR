function cargarFiltrosMarcas() {
    const selectFiltro = document.getElementById("filtroMarca");

    // Limpia las opciones actuales
    selectFiltro.innerHTML = "";

    marcas.forEach(element => {
        // Crea una opción y establece sus valores
        const option = document.createElement('option');
        option.value = element;
        option.textContent = element;

        // Añade la opción al <select>
        selectFiltro.appendChild(option);
    });
}
