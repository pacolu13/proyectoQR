const filtroEditorial = document.getElementById("filtroEditorial");

function cargarFiltrosEditorial() {

    // Limpia las opciones actuales
    filtroEditorial.innerHTML = "";

    // Añade la opción "Ninguno" al principio
    const opcionNinguno = document.createElement('option');
    opcionNinguno.value = "";
    opcionNinguno.textContent = "Editorial";
    filtroEditorial.appendChild(opcionNinguno);

    editoriales.forEach(element => {
        // Crea una opción y establece sus valores
        const option = document.createElement('option');
        option.value = element;
        option.textContent = element;

        // Añade la opción al <select>
        filtroEditorial.appendChild(option);
    });
}
