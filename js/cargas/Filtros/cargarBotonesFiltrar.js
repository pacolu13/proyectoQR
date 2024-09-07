function añadirBotonFiltrar(contenedor,funcion,idBoton) {
    var contenedor =  document.getElementById(contenedor);
    let botonFiltrarCompras = document.createElement("button");
    botonFiltrarCompras.id = idBoton;
    botonFiltrarCompras.textContent = "Filtrar"; 
    botonFiltrarCompras.onclick = funcion;
    contenedor.appendChild(botonFiltrarCompras);
}

añadirBotonFiltrar("filtrarCompras", filtrarCompras, "botonFiltrarCompras");
añadirBotonFiltrar("filtrarProductos", añadirFiltros, "botonFiltrarProductos");
añadirBotonFiltrar("filtrarVentas", filtrarVentas, "botonFiltrarVentas");