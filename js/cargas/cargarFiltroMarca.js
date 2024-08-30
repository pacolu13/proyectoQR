document.addEventListener("DOMContentLoaded", () => {
    const selectFiltro = document.getElementsByClassName(".filtro-Marca");

    console.log(marcas)

    marcas.forEach(marca => {
        const opcion = document.createElement("option");
        opcion.value = marca;
        opcion.textContent = marca;
        selectFiltro.appendChild(opcion);
    });

});

/*

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

*/