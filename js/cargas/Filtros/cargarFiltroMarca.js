const filtroMarca = document.getElementById("filtroMarca");

function filtrarMarca() {

    // Limpia las opciones actuales
    filtroMarca.innerHTML = "";

    // Añade la opción "Ninguno" al principio
    const opcionNinguno = document.createElement('option');
    opcionNinguno.value = "";
    opcionNinguno.textContent = "Marca";
    filtroMarca.appendChild(opcionNinguno);

    marcas.forEach(element => {
        // Crea una opción y establece sus valores
        const option = document.createElement('option');
        option.value = element;
        option.textContent = element;

        // Añade la opción al <select>
        filtroMarca.appendChild(option);
    });
}
