let selectFiltroMarca = document.getElementById("filtroMarca");

function cargarFiltrosMarca() {

    // Limpia las opciones actuales
    selectFiltroMarca.innerHTML = "";

    // Añade la opción "Ninguno" al principio
    const opcionNinguno = document.createElement('option');
    opcionNinguno.value = "";
    opcionNinguno.textContent = "Marca";
    selectFiltroMarca.appendChild(opcionNinguno);

    marcas.forEach(element => {
        // Crea una opción y establece sus valores
        const option = document.createElement('option');
        option.value = element;
        option.textContent = element;

        // Añade la opción al <select>
        selectFiltroMarca.appendChild(option);
    });
}
